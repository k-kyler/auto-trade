$(document).ready(function() {
	$(".color-1").click(function() {
		$(".showing-new-car-showcase-1").attr('src', './images/grey_1.jpg');
		$(".showing-new-car-showcase-2").attr('src', './images/grey_2.jpg');
	});

	$(".color-2").click(function() {
		$(".showing-new-car-showcase-1").attr('src', './images/black_1.jpg');
		$(".showing-new-car-showcase-2").attr('src', './images/black_2.jpg');
	});

	$(".color-3").click(function() {
		$(".showing-new-car-showcase-1").attr('src', './images/chealk_1.jpg');
		$(".showing-new-car-showcase-2").attr('src', './images/chealk_2.jpg');
	});

	$(".color-4").click(function() {
		$(".showing-new-car-showcase-1").attr('src', './images/maron_1.jpg');
		$(".showing-new-car-showcase-2").attr('src', './images/maron_2.jpg');
	});	
});