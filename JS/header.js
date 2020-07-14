$(document).ready(function() {

	// Show mobile menu
	$(".fa-arrow-left").hide();
	$(".mobile-list-options").hide();

	$(".mobile-menu a").click(function() {
		$(".fa-arrow-left").fadeIn("slow");
		$(".fa-bars").hide();
		$(".mobile-list-options").toggle("slow");
		$(".wrapper").fadeOut("slow");
	});

	$(".mobile-back-btn").click(function() {
		$(".wrapper").fadeIn("slow");
		$(".mobile-list-options").toggle("slow");
		$(".fa-bars").fadeIn("slow");
		$(".fa-arrow-left").fadeOut("slow");
	});


	// Active nav item when clicking option
	$(".nav-item").on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
	});
	
});



/*------------------ Header Shrink Effect -------------------*/

function shrinkEffect() {

	// Shrink effect after 10px scroll from top
	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
		document.getElementById('header-config').style.padding = "0 0";
		document.getElementById('header-config').style.backgroundColor = 'rgba(0, 0, 0, .803921568627451)';	
		document.getElementById('header-config').style.position = 'fixed';
	}

	else {
		document.getElementById('header-config').style.padding = "19px 0";
		document.getElementById('header-config').style.backgroundColor = 'rgba(0, 0, 0, .4823529411764706)';
		document.getElementById('header-config').style.position = 'absolute';
	}
}

window.onscroll = function() {
	shrinkEffect();
};

/* --------------------------------------------------------- */