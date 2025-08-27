$(document).ready(function () {
	$('.sliders').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: true,

		prevArrow:
			'<button type="button" class="btn-slick-prev btn btn-slider"><img src="images/prev.svg" alt="" /></button>',
		nextArrow:
			'<button type="button" class="btn-slick-next btn btn-slider"><img src="images/next.svg" alt="" /></button>',
	});
	$('.mibile-menu').click(function () {
		$('.mibile-menu span').toggleClass('active');
		$('.menu').toggleClass('active');
		$('body').toggleClass('overlay');
	});
});
