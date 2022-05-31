
/* Back to Top*/
$(document).ready(function(){
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('.backtotop').fadeIn();
		} else {
			$('.backtotop').fadeOut();
		}
	});

	$("a.backtotop").click(function() {
		$("html, body").animate({scrollTop: 0}, 1000);
	});

});
$(document).ready(function(){
$('#partial-view').slick({
	dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false,
    responsive: [{

      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
        infinite: true,
        slidesToScroll: 1,
      }

    }, {

      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true
      }

    }, {

      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }

    }, {

      breakpoint: 479,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
});

});