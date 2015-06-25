$(document).ready(function() {

	var itemWidth = $('.workItem').width();		//width of work div
	var doubleWidth = itemWidth + itemWidth;	// double width of work div
	var current = 0;	//current horizontal position of work div
	var index = 0;		//current position of circle indicators


	var scrollDist;
	var marginOffset = 0.5 * parseFloat($('#about').css("margin-top"));
	
	var totOffset;

	$('#aboutLink').click(function( e ){

		e.preventDefault();

		scrollDist = $("#about").offset().top;
		totOffset = scrollDist - marginOffset;

		$("html, body").animate( { scrollTop: totOffset}, 800);
	
	});


	$('#workLink').click(function( e ){
		e.preventDefault();

		scrollDist = $("#work").offset().top;
		totOffset = scrollDist - marginOffset;

		$("html, body").animate( { scrollTop: totOffset}, 800);
	});


	$('#contactLink').click(function(e ){

		e.preventDefault();

		scrollDist = $("#contact").offset().top;
		totOffset = scrollDist - marginOffset;

		$("html, body").animate( { scrollTop: totOffset}, 800);

	});


	$('#right').click(function(){
		
		if (current == doubleWidth){
			current = 0;
			index = 0;
		} else {
			current = current + itemWidth;
			index++;
		}
		$('#work').animate( { scrollLeft: current}, 800);
		circles(index);
	});

	$('#left').click(function() {
		if (current == 0){
			current = (doubleWidth);
			index = 2;
		} else {
			current = current - itemWidth;
			index--;
		}
		$('#work').animate( { scrollLeft: current}, 800);
		circles(index);
	});

	function circles( index ) {
		$('.shaded').removeClass('shaded').addClass('unshaded');
		$('.unshaded').each(function( i, element) {
			if (i == index){
			$(element).removeClass('unshaded').addClass('shaded');
			return false;
			}
		});
	}
	
});
