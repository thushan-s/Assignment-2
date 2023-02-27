var form = document.getElementById("form");


function user_verify(event) {
    event.preventDefault();

    // Getting the username and password inputted by the user
    var username = document.getElementById("in_username").value;
    var password = document.getElementById("in_password").value;

    // Authenticating the user
    if (usernames.includes(username)){
        index = usernames.indexOf(username);
        if (password == passwords[index]){
            window.location.href = "home.html";
        }else {
            console.log("Invalid password");
        }
    }else {
        console.log("Invalid username");
    }
}

// Listening for submission
form.addEventListener("submit", user_verify);



