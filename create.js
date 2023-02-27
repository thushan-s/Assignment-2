var create_form = document.getElementById("create_form");

function addUser(){
    var new_username = document.getElementById("new_username").value;
    var new_password = document.getElementById("new_password").value;

    //Adding new user to the array
    usernames.push(new_username);
    passwords.push(new_password);

}

create_form.addEventListener("submit", addUser);

function signOut(){
    window.location.href = "login.html";
}


