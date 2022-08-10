let userName = prompt("Enter your name", "John Doe");
let gender = prompt("What is your gender?", "Male/Female")
let age = prompt("How old are you?")

if (age <= 0 || age == "") {
    alert("Your age should be greater than 0");
    prompt("How old are you?");
}

let proceed = confirm("Do you want to proceed to the welcoming message?");

if (proceed == true) {
    if (gender == "Female" || gender == "female") {
        alert("Welcome to our Todo app, Ms " + userName)
    } else if (gender == "Male" || gender == "male") {
        alert("Welcome to our Todo app, Mr " + userName)
    } else {
        alert("Welcome to our Todo app, " + userName)
    }
}