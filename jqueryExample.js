$(document).ready(function(){
	$('button').on('click', aplicarEstilo());
});

function mostrarMensaje(){
	alert('Hola Mundo!');
}
function aplicarEstilo(){
	$('div h1').css('background-color', 'blue');
	$('div').css('border','1px solid black');
	$('div').css('padding','10px');
}