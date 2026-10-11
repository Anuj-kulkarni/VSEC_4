// Get the form
let form = document.getElementById("loginForm");


// When the user clicks Login
form.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();


    // Get username and password
    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;


    // Check password length
    if (password.length < 8) {

        alert("Password must contain at least 8 characters.");

    }

    else {

        alert("Login Successful!");

    }

});