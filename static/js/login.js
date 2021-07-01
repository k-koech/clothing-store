function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == null || email == "") {
        alert("Enter the mail used to register");
        return false;
    } else if (email.indexOf("@") == -1) {
        alert("enter valid email address");
        return false;
        // } else if (email.charAt(email.length - 4) != "." && email.charAt(email.length - 3) != ".") {
        //     alert("invalid email address");
        //     return false;
        // }
    }
    if (password == null || password == "") {
        alert("Enter your password");
    }
    if (email != '' && password != '') {
        alert("login successfull");
    }
    window.location.replace("index.html");
}