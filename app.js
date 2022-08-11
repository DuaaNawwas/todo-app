let userName = prompt("Enter your name", "John Doe");
let gender = prompt("What is your gender?", "Male/Female");
let age = prompt("How old are you?");

while (age <= 0 || isNaN(age)) {
    alert("Your age should be a number greater than 0");
    age = prompt("How old are you?");
}

let proceed = confirm("Do you want to proceed to the welcoming message?");

if (proceed) {
    if (gender == "Female" || gender == "female") {
        alert("Welcome to our Todo app, Ms. " + userName)
    } else if (gender == "Male" || gender == "male") {
        alert("Welcome to our Todo app, Mr. " + userName)
    } else {
        alert("Welcome to our Todo app, " + userName)
    }
}
const answers = [];
const questions = [];
questions[0] = prompt("Do you like to plan your day ahead?");
questions[1] = prompt("Do you feel like you get more done when you write your todos?")
questions[3] = prompt("Is this the first time you use a todo app");


for (let i = 0; i < 3; i++) {
    switch (questions[i]) {
        case "yes":
        case "Yes":
        case "y":
            answers.push("yes");
            break;
        case "no":
        case "No":
        case "n":
            answers.push("no");
            break;
        default:
            answers.push("invalid")
    }
}
console.log(answers);

let rate = prompt("How many stars 0-5 do you rate us?");

if (rate >= 5) {
    rate = 5;
    alert("You rated us 5 stars! Thank you!")
} else if (rate <= 0){
    rate = 0;
    alert("You rated us 0 stars! We are sorry :(")
} else if (rate > 0 && rate < 5) {
    alert("You rated us " + rate + " stars! Thank you!")
}



