global without sharing class NavigationController {
    
    global NavigationController() {
        
    }
    
    public class ProductDetailWrapper {
        @auraEnabled 
        public Product2 product;
        @auraEnabled 
        public List<Product2> relatedProducts;
        
    }
    
    @AuraEnabled 
    public static ProductDetailWrapper getProductList() {
        List<Product2> relatedProducts = [SELECT Id, Name, Family, ProductCode, Description, IsActive, DisplayUrl, Rating__c, (SELECT Id, UnitPrice FROM PriceBookEntries) FROM Product2];
        ProductDetailWrapper detail = new ProductDetailWrapper();
        detail.product = null;
        detail.relatedProducts = relatedProducts;
        return detail;
    }
    
    @AuraEnabled 
    public static ProductDetailWrapper getProductDetail(String productId) {
        Product2 product = [SELECT Id, Name, Family, ProductCode, Description, IsActive, DisplayUrl, Rating__c, (SELECT Id, UnitPrice FROM PriceBookEntries) FROM Product2 WHERE Id =: productId];
        List<Product2> relatedProducts = [SELECT Id, Name, Family, ProductCode, Description, IsActive, DisplayUrl, Rating__c, (SELECT Id, UnitPrice FROM PriceBookEntries) FROM Product2 WHERE Family =: product.Family AND Id !=: productId LIMIT 3];
        
        ProductDetailWrapper detail = new ProductDetailWrapper();
        detail.product = product;
        detail.relatedProducts = relatedProducts;
        return detail;
    }
    
    @AuraEnabled 
    public static Boolean fetchUserType() {
        Boolean isLoggedIn = false;
        String userType = UserInfo.getUserType();
        if (userType != 'Guest') {
            isLoggedIn = true;
        }
        return isLoggedIn;
    }
    
    @AuraEnabled
    global static String checkPortal(String username, String password) {
        try {
            String startUrl = 'https://suyatiinc-dev-ed.develop.my.site.com/fenvest/s';
            ApexPages.PageReference pageRef = Site.login(username, password, null);
            if(pageRef != null) 
                return pageRef.getUrl();
            else 
                return null;
        } 
        catch (Exception e) {
            system.debug('e.getMessagelogin+   '+e.getMessage());
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @AuraEnabled
    global static String forgotPassowrd(
        String username) {
            String procesMsg = '';
            
            if (Site.isValidUsername(
                username)) {
                    
                    Site.forgotPassword(
                        username);
                    procesMsg = 'Login reset success';
                }
            else {
                
                procesMsg = 'Login reset warning';
            }
            return procesMsg;
        }
}