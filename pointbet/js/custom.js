
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
	$(".top-bar-menu button.menu-toggle").click(function(){
		$(".top-bar-menu ul").slideToggle('slow');
	});

});
$(document).ready(function() {
	$('.left-sidebar-ul li a[href*=\\#]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
					scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
					});

				return false;
			});


	$('#mobile_app_slider').owlCarousel({
		loop:false,
		items : 1,
		nav:false,
		dots: true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			992:{
				items:1,
				nav:false
			},
			1000:{
				items:1,
				nav:false,
				dots: true
			}
		}
	});
});



// Cache selectors
$(document).ready(function() {
	var lastId,
	topMenu = $(".left-sidebar-ul"),
	/*    topMenuHeight = topMenu.outerHeight()-600,*/
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
    	var item = $($(this).attr("href"));
    	if (item.length) { return item; }
    });

    if ($(window).width() > 767)
    {
    	var	topMenuHeight = topMenu.outerHeight()-550;
    	return;
    }
menuItems.click(function(e){
	var href = $(this).attr("href"),
	offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	$('html, body').stop().animate({ 
		scrollTop: offsetTop
	}, 300);
	e.preventDefault();
});

$(window).scroll(function(){
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   var cur = scrollItems.map(function(){
   	if ($(this).offset().top < fromTop)
   		return this;
   });
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
   	lastId = id;
       menuItems
       .parent().removeClass("active")
       .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});


});