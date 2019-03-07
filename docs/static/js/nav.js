/*
	For partial fulfillment of the module requirements for ICT1004 Web Systems and Technologies.
	Infocomm Technology Cluster, Singapore Institute of Technology.
*/


function display_top() {
	if ($(window).scrollTop() > 100) {
		$("#to-top").fadeIn();
	}
	else {
		$("#to-top").fadeOut();
	}
}

$(document).ready(function() {
	$(".no-href").on("click", function(e) {
		e.preventDefault();
		return false;
	});
	

	$("#to-top").on("click touchstart", function(e){
		e.preventDefault();
		
		$("html, body").stop().animate({
			scrollTop: 0,
		}, "slow", "swing");

		return false;
	});

	display_top();

	$(document).on("scroll", display_top);

});