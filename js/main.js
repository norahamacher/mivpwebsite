$(document).ready(function(){

	//check on which page we are and set active nav li
	var url =  window.location.href;
	var page = url.split("/")[url.split("/").length-2];

	switch(page){
		
		case "facilities":
			$("#facilites").addClass("active");
			break;
		case "access":
			$("#access").addClass("active");
			break;
		case "visualisation":
			$("#visualisation").addClass("active");
			break;
		case "blog":
			$("#news").addClass("active");
			break;
		case "contact":
			$("#people").addClass("active");
			break;
		case "partners":
			$("#partners").addClass("active");
			break;
		default:
			$("#home").addClass("active");

	}
	$("#portfolio-contant-active").mixItUp();


	$("#lateststories").owlCarousel({
		autoPlay: 5000,
		items : 3,
		itemsDesktop : [1599,3], 
  		itemsDesktopSmall : [1200,2], 
  		itemsTablet: [700,1], 
  		itemsMobile : [479,1],
		loop: true,
		rewind: false,
	});


	$(".nav a").on("click", function(){
   		$(".nav").find(".active").removeClass("active");
   		$(this).parent().addClass("active");
	});

	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });

	window.onscroll = function() {
		toggleNavBarFix();
	};

	function toggleNavBarFix() {
    	if (document.body.scrollTop > 74 ) {
        	$("#menu").addClass("navbar-fixed-top");
		} else {
			$("#menu").removeClass("navbar-fixed-top");
		}
	}
});




