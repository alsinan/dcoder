({
	doInit : function(component, event, helper) {
        var action = component.get("c.getProductDetail");
        action.setParams({
            productId : component.get("v.recordId")
        });
        action.setCallback(this, function (a) {
            var rtnValue = a.getReturnValue();
            if(rtnValue != null) {
                
                
                helper.handleUser(component);
                
                
                component.set("v.product", rtnValue.product);
                component.set("v.relatedProducts", rtnValue.relatedProducts);
            }
            else {
                component.set("v.product", rtnValue);
            }
        });
        $A.enqueueAction(action);
	},
    switchInfoTab : function(component, event, helper) {
        let selectedsection = event.target.id;
        if(selectedsection == 'product-info') {
            component.set("v.showProductInfo", true);
        }
        else {
            component.set("v.showProductInfo", false);
        }
    }
})