jQuery(function($) {

//Function to set element height to window height.
$.fn.setHightFull = function() {

	return this.each(function() {

		var windowCurrentHeight = $(window).height();
		
		$(this).css(
			{
				height: windowCurrentHeight + 'px'
			}
		);

	});
};

//Fuction to set translateZ to half of width/height and set rotation to form cube
$.fn.renderCube = function() {

	return this.each(function() {

		var elementWidth = $(this).width(),
		elementHeight = $(this).height();

		if ( $(this).hasClass('front') ) {



			$(this).css({
						'background-color': 'hsla(0, 80%, 40%, 0.5)',
						'-webkit-transform': 'translateZ(' + elementWidth / 2 + 'px)',
						   '-moz-transform': 'translateZ(' + elementWidth / 2 + 'px)',
						    '-ms-transform': 'translateZ(' + elementWidth / 2 + 'px)',
						     '-o-transform': 'translateZ(' + elementWidth / 2 + 'px)',
						        'transform': 'translateZ(' + elementWidth / 2 + 'px)'
			});

		} else if($(this).hasClass('top')) {

			$(this).css({
				'background-color': 'hsla(72, 80%, 40%, 0.5)',
						'-webkit-transform': 'rotateX(90deg) translateZ(' + elementHeight / 2 + 'px)',
						   '-moz-transform': 'rotateX(90deg) translateZ(' + elementHeight / 2 + 'px)',
						    '-ms-transform': 'rotateX(90deg) translateZ(' + elementHeight / 2 + 'px)',
						     '-o-transform': 'rotateX(90deg) translateZ(' + elementHeight / 2 + 'px)',
						        'transform': 'rotateX(90deg) translateZ(' + elementHeight / 2 + 'px)'
			});

		} else if($(this).hasClass('right')) {

			$(this).css({
				'background-color': 'hsla(144, 80%, 40%, 0.5)',
						'-webkit-transform': 'rotateY(90deg) translateZ(' + elementWidth / 2 + 'px)',
						   '-moz-transform': 'rotateY(90deg) translateZ(' + elementWidth / 2 + 'px)',
						    '-ms-transform': 'rotateY(90deg) translateZ(' + elementWidth / 2 + 'px)',
						     '-o-transform': 'rotateY(90deg) translateZ(' + elementWidth / 2 + 'px)',
						        'transform': 'rotateY(90deg) translateZ(' + elementWidth / 2 + 'px)'
			});

		} else if($(this).hasClass('left')) {

			$(this).css({
				'background-color': 'hsla(216, 80%, 40%, 0.5)',
						'-webkit-transform': 'rotateY(-90deg) translateZ(' + elementWidth / 2 + 'px)',
						   '-moz-transform': 'rotateY(-90deg) translateZ(' + elementWidth / 2 + 'px)',
						    '-ms-transform': 'rotateY(-90deg) translateZ(' + elementWidth / 2 + 'px)',
						     '-o-transform': 'rotateY(-90deg) translateZ(' + elementWidth / 2 + 'px)',
						        'transform': 'rotateY(-90deg) translateZ(' + elementWidth / 2 + 'px)'
			});

		} else if($(this).hasClass('bottom')) {

			$(this).css({
				'background-color': 'hsla(288, 80%, 40%, 0.5)',
						'-webkit-transform': 'rotateX(-90deg) translateZ(' + elementHeight / 2 + 'px)',
						   '-moz-transform': 'rotateX(-90deg) translateZ(' + elementHeight / 2 + 'px)',
						    '-ms-transform': 'rotateX(-90deg) translateZ(' + elementHeight / 2 + 'px)',
						     '-o-transform': 'rotateX(-90deg) translateZ(' + elementHeight / 2 + 'px)',
						        'transform': 'rotateX(-90deg) translateZ(' + elementHeight / 2 + 'px)'
			});

		} else if($(this).hasClass('back')) {

			$(this).css({
				'background-color': 'hsla(360, 80%, 40%, 0.5)',
						'-webkit-transform': 'rotateY(-180deg) translateZ(' + elementWidth / 2 + 'px)',
						   '-moz-transform': 'rotateY(-180deg) translateZ(' + elementWidth / 2 + 'px)',
						    '-ms-transform': 'rotateY(-180deg) translateZ(' + elementWidth / 2 + 'px)',
						     '-o-transform': 'rotateY(-180deg) translateZ(' + elementWidth / 2 + 'px)',
						        'transform': 'rotateY(-180deg) translateZ(' + elementWidth / 2 + 'px)'
			});

		};

	});

};


$(document).ready(function() {

	$('.side').setHightFull().renderCube();

	$('.cube').setHightFull();

	var rotateItX = 0,
	rotateItY = 0;


	$('.direction').click(function() {

		if( $(this).hasClass('move-up') ) {
			rotateItX += 90;
		} else if( $(this).hasClass('move-down') ) {
			rotateItX -= 90;
		} else if( $(this).hasClass('move-right') ) {
			rotateItY += 90;
		} else if( $(this).hasClass('move-left') ) {
			rotateItY -= 90;
		}

		$('.cube').css({
						'-webkit-transform': 'rotateX(' + rotateItX + 'deg) rotateY(' + rotateItY + 'deg)',
						   '-moz-transform': 'rotateX(' + rotateItX + 'deg) rotateY(' + rotateItY + 'deg)',
						    '-ms-transform': 'rotateX(' + rotateItX + 'deg) rotateY(' + rotateItY + 'deg)',
						     '-o-transform': 'rotateX(' + rotateItX + 'deg) rotateY(' + rotateItY + 'deg)',
						        'transform': 'rotateX(' + rotateItX + 'deg) rotateY(' + rotateItY + 'deg)'
			});

	});


	$(window).resize(function() {

		$('.side').setHightFull();

		$('.cube').setHightFull();

	});

});


});