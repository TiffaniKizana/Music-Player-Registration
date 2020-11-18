let name = document.getElementById("name")
let gender = document.getElementById("select-gender")
let email = document.getElementById("email")
let password = document.getElementById("password")
let cpassword = document.getElementById("cpassword")
let payment = document.getElementById("select-payment")
let checkbox = document.getElementById("agree-checkbox")
let regis_button = document.getElementById("regisbtn")


function onSubmitClick() {

    email = email.value

    if (gender.value == "select")
        alert("Please select your gender")
    else if(email == "")
        alert("Your email need to be filled");
    else if (email.lastIndexOf("@") <= 0 ||
        email.indexOf("@") <= 0 ||
        email.indexOf("@.") !== -1 ||
        !email.endsWith(".com") ||
        email.lastIndexOf("@") !== email.indexOf("@")
    )
        alert("Please input a valid email")
    else if (password.value == "")
        alert("Password is required")
    else if (password.value.length < 8)
        alert("Password length must at least 8 characters")
    else if (password.value != cpassword.value)
        alert("Wrong confirmed password")
    else if (payment.value == "select")
        alert("Please select your payment method")
    else if (!checkbox.checked)
        alert("You must agree first")
    else
        alert("Sign Up Success")
}