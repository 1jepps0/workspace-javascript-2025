// get the element 
const element1 = document.getElementById('num1');
const element2 = document.getElementById('num2');

// element --- property
const num1 = parseInt(element1.textContent); 
const num2 = parseInt(element2.textContent); 

//process
var c = num1 + num2;
var d = num1 - num2;

//display
document.write(c);
document.write("<p> Subtraction: " + d + "</p>");
