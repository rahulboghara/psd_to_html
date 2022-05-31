
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