({
    doInit : function(component, event, helper) {
        var action = component.get("c.getProductList");
        action.setCallback(this, function (a) {
            var rtnValue = a.getReturnValue();
            if(rtnValue!=null) {
                console.log(rtnValue.relatedProducts)
                component.set("v.productList", rtnValue.relatedProducts);
            }
            else {
            }
        });
        $A.enqueueAction(action);
	}
})