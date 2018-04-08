$(document).ready(function(){
	$('button').on('click', mostrarMensaje());
});

function mostrarMensaje(){
	$('div h1').css("background-color", "yellow");
	alert('Hola Mundo!');
}