/*  Implement random quize */ 

// get the element and change value [300,500)
var num1 = Math.floor(Math.random()*200 + 300);
document.getElementById('M').textContent = num1.toString();
var num2 = 100;  //change it
var num3 =3 ; //change it 

// update all the answers -- practice
document.querySelector('input[value="4"]').nextSibling.nodeValue=num1.toString()+ "-"+num2.toString()+"+"+num3.toString();



answers = document.getElementsByClassName('answer');

// Elements -- div answer box -- click
function changeStyle() {
    event.preventDefault();

    if (this.className == "answer") 
        this.className = "answer selected";
    else
        this.className = "answer";
}



for (let i = 0; i < answers.length; i++){
    answers[i].addEventListener('click', changeStyle, false);
}


