
$(document).ready(function(){
        setTimeout(function(){
            $(".loading-wrapper").fadeOut(800);
        },1400);
        $('.adigami').carousel({
            interval: 3000
          })
          $('.gugi').carousel({
            interval: 4500
          })
    });
    function openNav() {
        $("#overlay").css ("height","100vh");
    }
    
    /* Close */
    function closeNav() {
        $("#overlay").css ("height","0vh");
        
    }