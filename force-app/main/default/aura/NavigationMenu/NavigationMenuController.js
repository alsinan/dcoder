({
    logout : function(component, event, helper) {
        window.location.replace("https://suyatiinc-dev-ed.develop.my.site.com/secur/logout.jsp");
    },
    doInit : function(component, event, helper) {
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