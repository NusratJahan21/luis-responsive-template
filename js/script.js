$( function() {
$('.carousel').carousel({
  interval: 2000
});

 $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 210,
        itemMargin: 5,
        minItems: 2,
        maxItems: 4,
        controlNav: false,
        directionNav:false,
        slideshowSpeed:4000
      });
}); 