({
    scriptsLoaded : function(component, event, helper) {
        var timeleft = 60;
       /* var downloadTimer = setInterval(function(){
            timeleft--;
            document.getElementById("countdowntimer").textContent = '00:'+timeleft;
            if(timeleft <= 0)
                clearInterval(downloadTimer);
        },1000);
        
        */
        $( document ).ready(function() {
            
            $(".sidebar-dropdown > a").click(function() {
                $(".sidebar-submenu").slideUp(200);
                if (
                    $(this)
                    .parent()
                    .hasClass("active")
                ) {
                    $(".sidebar-dropdown").removeClass("active");
                    $(this)
                    .parent()
                    .removeClass("active");
                } else {
                    $(".sidebar-dropdown").removeClass("active");
                    $(this)
                    .next(".sidebar-submenu")
                    .slideDown(200);
                    $(this)
                    .parent()
                    .addClass("active");
                }
            });
            $("#close-sidebar").click(function() {
                $(".page-wrapper").removeClass("toggled");
            });
            $("#show-sidebar").click(function() {
                $(".page-wrapper").addClass("toggled");
            });
        });
    },
    init: function(component, event, helper) {},
    goNext : function(component, event, helper) {
        if(event.target.id != 'sixth') {
            var element = document.getElementById(event.target.id).nextElementSibling;
            element.focus();
        }
        else {
            document.getElementById('validate').focus()
        }
        
    }
})