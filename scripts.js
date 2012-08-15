 //Para la sus funcionalidades por defecto
 // $(window).load(function() {
    // $('.flexslider').flexslider();
  // });
  
  //Establecemos sus atributos
 $(window).load(function() {
    $('.flexslider').flexslider({
          animation: "slide",
          controlsContainer: ".flex-container",
		  direction: "vertical",
		  slideshowSpeed: 7000,           
		  animationSpeed: 600,
    });
  });