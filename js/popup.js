function animationStart (id) {
      window.onwheel = function(){ return false };
      document.body.style.overflow = 'hidden';

      var blanket = document.getElementById("blanket");
      var popUp = document.getElementById(id + "t");
      var close = document.getElementById(popUp.id + "t");
      var side = document.getElementById("aside");

      blanket.style.display ="block";
      popUp.style.display = "block";
      side.style.width = "215px";

      close.addEventListener("click", function()
      {
            blanket.style.display ="none";
            popUp.style.display = "none";
            side.style.width = "200px";
            window.onwheel = function(){ return true; };
            document.body.style.overflow = 'auto';
      });
      blanket.addEventListener("click", function()
      {
            blanket.style.display ="none";
            popUp.style.display = "none";
            side.style.width = "200px";
            window.onwheel = function(){ return true; };
            document.body.style.overflow = 'auto';
      });
};
