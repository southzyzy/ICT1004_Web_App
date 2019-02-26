/*
	For partial fulfillment of the module requirements for ICT1004 Web Systems and Technologies.
	Infocomm Technology Cluster, Singapore Institute of Technology.
*/

$(document).ready(function(){

	function scroll_threshold(limit) {
		var pos = Math.round($(window).scrollTop());

		if (pos > limit) {
			return true;
		} else {
			return false;
		}
	}

	var page_width = $(window).width();
	var banner_pos = $("#home-banner").offset().top + $("#home-banner").height();

	$(window).resize(function() {
		// Update the page_width variable upon resize.
		page_width = $(window).width();

		if (page_width < 768) {
			// Assume mobile display.
			$(".site-navbar-top").slideDown();
		} else {
			if (scroll_threshold(banner_pos)) {
		        $(".site-navbar").removeClass("transparent-nav");
		        $(".site-navbar-top").slideDown();
		    } else {
		        $(".site-navbar").addClass("transparent-nav");
		        $(".site-navbar-top").slideUp();
		    }
		}
	});

	if (page_width >= 768) {
		// Check if we are on a big enough display width.
		$(window).on("scroll",function(){
		    if (scroll_threshold(banner_pos)) {
		        $(".site-navbar").removeClass("transparent-nav");
		        $(".site-navbar-top").slideDown();
		    } else {
		        $(".site-navbar").addClass("transparent-nav");
		        $(".site-navbar-top").slideUp();
		    }
		});
	}

});