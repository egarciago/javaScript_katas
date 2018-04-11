$(document).ready(function(){
	$('button').on('click', aplicarEstilo());
});

function mostrarMensaje(){
	alert('Hola Mundo!');
}
function aplicarEstilo(){
	var estilo = $.noConflict();
	estilo('div h1').css('background-color', 'blue');
	estilo('div').css('border','1px solid black');
	estilo('div').css('padding','10px');
	estilo('div h1').hover(function(){
		estilo(this).css('background-color', 'yellow');
	});
}