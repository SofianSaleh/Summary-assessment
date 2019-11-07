

$('#create').click(function(){
if($("#checkbox1").prop('checked') && $("#checkbox2").prop('checked') && $("#checkbox3").prop('checked')){
	$('ul').append('<li class="black">' + 'black' + '</li>')
}else if($("#checkbox1").prop('checked') && $("#checkbox2").prop('checked')){
	$('ul').append('<li class="purple">' + 'purple' + '</li>')
}else if($("#checkbox1").prop('checked') && $("#checkbox3").prop('checked')){
$('ul').append('<li class="green">' + 'green' + '</li>')
}else if($("#checkbox2").prop('checked') && $("#checkbox3").prop('checked')){
	$('ul').append('<li class="orange">' + 'orange' + '</li>')
}else{
	if($("#checkbox1").prop('checked')){
	$('ul').append('<li class="yellow">' + 'yellow' + '</li>')
}
if($("#checkbox2").prop('checked')){
	$('ul').append('<li class="blue">' + 'blue' + '</li>')
}
if($("#checkbox3").prop('checked')){
	$('ul').append('<li class="red">' + 'red' + '</li>')
}
}
})


$('#remove').click(function(){

	if($("#checkbox1").prop('checked') && $("#checkbox2").prop('checked') && $("#checkbox3").prop('checked')){
	$('.black').remove()
}else if($("#checkbox1").prop('checked') && $("#checkbox2").prop('checked')){
	$('.purple').remove()
}else if($("#checkbox1").prop('checked') && $("#checkbox3").prop('checked')){
$('.green').remove()
}else if($("#checkbox2").prop('checked') && $("#checkbox3").prop('checked')){
	$('.orange').remove()
}else{
	if($("#checkbox1").prop('checked')){
	$('.yellow').remove()
}
if($("#checkbox2").prop('checked')){
	$('.blue').remove()
}
if($("#checkbox3").prop('checked')){
	$('.red').remove()
}
}
})