
/* Send a customized message based on time
*/
//console.log("I am in the hello.js");

// get the date and time 
var today = new Date();
var currentHour = today.getHours();

// display the greeting message 
// modify the code so that your code display "Good afternoon" whereas time is from 12:00pm to 6:00pm
var greetings = "Good morning";
if (currentHour >= 12 && currentHour < 18) {
    greetings = "Good afternoon";
}else {
    greetings = "Good evening";
}


// write to the document 
document.write(greetings);