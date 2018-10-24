
$(document).ready(function(){
        setTimeout(function(){
            $(".loading-wrapper").fadeOut(800);
        },1400);
    });
    function openNav() {
        $("#overlay").css ("height","100vh");
    }
    
    /* Close */
    function closeNav() {
        $("#overlay").css ("height","0vh");
        
    }