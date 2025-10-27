// get the element 

// element --- property
const sE = document.getElementById('num1'); // element object 
var num1 = parseInt(sE.textContent);   //string type
var num2 = parseInt(document.getElementById('num2').textContent); 
console.log("I get num1 " + num1 +" I get num2 " + num2);

//process
var c = num1 + num2;

//display
document.write(c);