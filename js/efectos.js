$(document).ready(function(){

// MENÚ

	$('.menu a').each(function(index, elemento){
		$(this).css({
			'left': '200px'
		});

		$(this).animate({
			'left': '0'
		}, 2000 + (index * 500));
	});

});