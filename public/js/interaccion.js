$(document).ready(function()
{
	$('.menu li a').on('click', function(event) {
		event.preventDefault();
		var href = $(this).attr('href');
		$('#contenido').load(href);
	})
})