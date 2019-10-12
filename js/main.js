
$(document).ready(function(){
        setTimeout(function(){
            $(".loading-wrapper").fadeOut(800);
        },1200);
        $('.adigami').carousel({
            interval: 3000
          })
          $('.gugi').carousel({
            interval: 4600
          })
    });
    function openNav() {
        $("#overlay").css ("height","100vh");
    }
    
    /* Close */
    function closeNav() {
        $("#overlay").css ("height","0vh");
        
    }
