/*
	For partial fulfillment of the module requirements for ICT1004 Web Systems and Technologies.
	Infocomm Technology Cluster, Singapore Institute of Technology.
*/


function disappear() {
    $(".central_outlet").fadeOut("slow");
    $(".north_outlet").fadeOut("slow");
    $(".south_outlet").fadeOut("slow");
    $(".east_outlet").fadeOut("slow");
    $(".west_outlet").fadeOut("slow");
}

function filterLocation() {
    disappear();
    
    if ($(this).val() === "all") {
        $(".central_outlet").fadeIn("slow");
        $(".north_outlet").fadeIn("slow");
        $(".south_outlet").fadeIn("slow");
        $(".east_outlet").fadeIn("slow");
        $(".west_outlet").fadeIn("slow");
    } else {
        $("." + $(this).val() + "_outlet").fadeIn("slow");
    }
}

$(document).ready(function () {
    $("#region_form_selection").change(filterLocation);
});