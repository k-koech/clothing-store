function register() {
    var email = document.getElementById("email").value;
    var userName = document.getElementById("username").value;
    var phoneNumber = document.getElementById("phonenumber").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("conpassword").value;
    if (email == null || email == "") {
        alert("Enter Your Email");
        return false;
    }
    if (userName == null || userName == "") {
        alert("Enter UserName");
        return false;
    }
    if (phoneNumber == null || phoneNumber == "") {
        alert("Phone number cann't be Empty");
        return false;
    }
    if (password == null || password == "") {
        alert("Enter password");
        return false;
    } else if (password.length <= 6 || password.length >= 15) {
        alert("password length should be more than 6 characters and less than 15");
        return false;
    }

    if (confirmPassword == null || confirmPassword == "") {
        alert("confirm password should be entered");
        return false;
    }
    if (password != confirmPassword) {
        alert("passwords doesn't match");
        return false;
    }
    if (email != '' && userName != '' && phoneNumber != '' && password != '' && confirmPassword != '' && password == confirmPassword)
        alert("Registration successfull");
    window.location.href = 'login.html';
}