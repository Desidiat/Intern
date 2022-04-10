// Document Ready
$(document).ready(function() {
	$('.menu').click(function(){
		$(this).toggleClass('is-active');
		$('header nav.d-flex').toggleClass('active');
	});
});
