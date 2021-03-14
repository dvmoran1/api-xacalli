$(document).ready(function()
{
	
	//-----Para desplegar el btn-menu--------//
	//---------------------------------------//
	const btn = document.querySelector('#btn-menu');
	const menu = document.querySelector('#sidebar');
	btn.addEventListener('click', e => {
		menu.classList.toggle("menu-expanded");
		menu.classList.toggle("menu-collapsed");
		document.querySelector('body').classList.toggle('body-expanded');
	});

	$('#sidebar ul li a').each(function(){

		var href = $(this).attr('href');
		$(this).attr({href:'#'});

		$(this).click(function(event){
			if (href == 'Salir') {
				$(this).attr({href:'Salir'});
			}
			if (href == 'Home') {
				location.reload();
			}
			$('#header_contenido').load(href);

			if ($(this).hasClass('activado')){//si el elemento cliqueado tiene la clase activado entonces ejecuta el codigo para removerlo y se contrael el submenu 'se oculta'
				$(this).removeClass('activado');
				//$(this).children('ul').slideUp();
			}else{
				//$('.menu li a').slideUp();//oculta todos los submenus
				$('.menu li a').removeClass('activado');//se les quita el activado
				$(this).addClass('activado');//se pone el activado solo al que fue cliqueado
				//$(this).children('ul').slideDown();//y en este muestra el clqueado
			}

		});
	});
}