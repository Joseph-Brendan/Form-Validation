const form = document.getElementById("form")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const emailError = document.getElementById("emailError")
const passwordError = document.getElementById("passwordError")
const button = document.getElementById("btn")
const formMessage = document.getElementById("formMsg")
const r1 = document.getElementById("r1")
const r2 = document.getElementById("r2")
const r3 = document.getElementById("r3")
const r4 = document.getElementById("r4")


// EMAIL VALIDATION PROCESS
function checkEmail(){
    let emailValue = emailInput.value.trim()

    if(emailValue === ""){
        emailError.textContent = "This field cannot be empty!"
        emailInput.className = "invalid"
        return false
    }

    if(emailValue.indexOf("@") === -1 || emailValue.indexOf(".") === -1){
        emailError.textContent = `Enter a valid email address`
        emailInput.className = "invalid"
        return false
    }
    emailError.textContent = ""
    emailInput.className = "valid"
}

//PASSWORD VALIDATION PROCESS

//Uppercase helper function
function hasUpperCase(text){
    if(text.toLowerCase() !== text){
        return true
    }else{
        return false
    }
}

// Lowercase helper function
function hasLowerCase(text){
    if(text.toUpperCase() !== text){
        return true
    }else{
        return false
    }
}

// Number helper function
function hasNumber(text){
    let i = 0;
    while(i < text.length){
        let ch = text[i]
        if(ch >= "0" && ch <= "9"){
            return true
        }
        i++
    }
    return false
}


function checkPassword(){
    let passwordValue = passwordInput.value

    // Check for length
    if(passwordValue.length >= 8){
        r1.className = "req ok"
    }else{
        r1.className = "req"
    }

    // Check for uppercase
    if(hasUpperCase(passwordValue)){
        r2.className = "req ok"
    }else{
        r2.className = "req"
    }

    // Check for lowercase
    if(hasLowerCase(passwordValue)){
        r3.className = "req ok"
    }else{
        r3.className = "req"
    }

    // Check for number
    if(hasNumber(passwordValue)){
        r4.className = "req ok"
    }else{
        r4.className = "req"
    }
}