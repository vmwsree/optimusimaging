// JavaScript for Mooca
(function($) {
	$(document).ready(function() {
		"use strict";
		
		
		// Parallax effect
		$.stellar({
			horizontalScrolling: false,
			verticalOffset: 0,
			responsive:true
			});
			
		
		
		// Side Menu
		$('.toggle-menu').jPushMenu({closeOnClickLink: false});
       	$('.dropdown-toggle').dropdown();
		
		
		
		
		// Litebox
		$('.litebox').tosrus({
			buttons: 'inline',
			pagination	: {
			add			: true,
			type		: 'thumbnails'
			}
		});
		
		
		
		// Home logos carousel	
		$('.owl-logos').owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			responsiveClass:true,
			responsive:{
				0:{
				items:2,
				nav:false
				},
				600:{
				items:3,
				nav:false
				},
				960:{
				items:4,
				nav:false
				},
				1170:{
				items:4,
				nav:false
				}
			}
		});
		
		// Portfolio carousel	
		$('.carousel-gallery').owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			responsiveClass:true,
			responsive:{
				0:{
				items:2,
				nav:false
				},
				600:{
				items:3,
				nav:true
				},
				960:{
				items:4,
				nav:true
				},
				1170:{
				items:5,
				nav:true
				}
			}
		});
		
		
		// Home header carousel	
		$('.home-carousel').owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			responsiveClass:true,
			responsive:{
				0:{
				items:2,
				nav:false
				},
				600:{
				items:3,
				nav:false
				},
				960:{
				items:3,
				nav:true
				},
				1170:{
				items:3,
				nav:true
				}
			}
		});
		
		
		// Page transition
		$('.transition').on('click', function(e) {
      	$('.transition-overlay').toggleClass("transition-overlay-show");
	    });
		
		
		// Transition delay
		$('.transition').click(function (e) {
    	e.preventDefault();                  
    	var goTo = this.getAttribute("href"); 
		 

    	setTimeout(function(){
         window.location = goTo;
    	},1000);       
		}); 
		
				
});

		// Portfolio horizontal scrollbar
		$(window).load(function(){
			$("#content-1").mCustomScrollbar({
				axis:"x",
				advanced:{autoExpandHorizontalScroll:true}
			});
					
		});

		
		
		// Wow animations
		wow = new WOW(
      	{
       		animateClass: 'animated',
        	offset:       0
      	}
    	);
    	wow.init();
		
		
		
		// Masonry Portfolio
		var container = document.querySelector('.works ul, .portfolio-masonry ul, .home-portfolio, .home-portfolio-col-3');
		var msnry = new Masonry( container, {
		itemSelector: '.works ul li, .portfolio-masonry ul li, .home-portfolio li, .home-portfolio-col-3 li'
		});
		
		
})(jQuery);