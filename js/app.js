$(document).ready(function() {

	// this is for RYU
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})

	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})

	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
			{'left': '1200px'},
			500,
			function() {
			$(this).hide();
			$(this).css('left', '540px');
			});
	})

	.mouseup(function() {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	})

	$(document).keydown(function(e) {
		if (e.which == 88) {
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
	}})

	.keyup(function(e) {
		if (e.which == 88) {
			$('.ryu-cool').hide();
			$('.ryu-ready').show();
	}});

	
	