$(document).ready(function(){
	$(window).scroll(function(){
		var windowWidth = $(window).width();

		if(windowWidth > 800){
			var scroll = $(window).scrollTop();

			$('.botones .textos').css({
				'transform': 'translate(0px, ' + scroll / 6 + '%)'
			});

			$('.informacion article').css({
				'transform': 'translate(0px, -' + scroll / 8 + '%)'
			});
		}
	});

	$(window).resize(function(){
		var windowWidth = $(window).width();
		if(windowWidth < 800) {
			$('.informacion article').css({
				'transform': 'translate(0px, 0px)'
			});
		}
	});
});