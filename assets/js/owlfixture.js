var owl = $('.owl-carousel');
var owlCarouselTimeout = 1500;
owl.owlCarousel({
    loop:true,
    //autoHeight:true,
    center: true,
    margin:3,
    //animateOut: 'slideOutDown',
    //animateIn: 'flipInX',
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1300:{
            items:5
        }
    },
     autoplay:true,
   autoplayTimeout: owlCarouselTimeout,
   autoplayHoverPause:true
});

$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});


$(document).on('click', '.owl-item>div', function() {
  // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
  var $speed = 270;  // in ms
  $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
});