var input1 = getElementById('input1');
var input2 = getElementById('input2');
var ul = getElementById('ul');
document.body.onload = add
function add(item){
if(input2 === 'red' || input2 === 'yellow' || input2 === 'blue') {
 // input.appendTo.ul = input1;
 var newContent = document.createTextNode(input1); 
ul.appendChild(newContent);
}
}
