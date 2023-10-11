({
    handleUser : function(component) {
        var action = component.get("c.fetchUserType");
        action.setCallback(this, function (a) {
            var rtnValue = a.getReturnValue();
            if(rtnValue) {
                component.set("v.inSession", true);
            }
            else {
                component.set("v.inSession", false);
            }
        });
        $A.enqueueAction(action);
	}
})