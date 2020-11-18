function validateEmail() {
    var email = document.getElementById("subscribeEmail").value;

    if(email == "")
        alert ("Your email need to be filled");
    else if (email.lastIndexOf("@") <= 0 ||
        email.indexOf("@") <= 0 ||
        email.indexOf("@.") !== -1 ||
        !email.endsWith(".com") ||
        email.lastIndexOf("@") !== email.indexOf("@")
    )
        alert("Please input a valid email!")
    else
        alert("Thank you for subscribing our product")
}

