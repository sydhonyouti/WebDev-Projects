// Your solution goes here 
function isStrongPassword(password) {
    let isPass = true;
    if (password.length < 8)
        isPass = false;
    else if(password.indexOf("password") != -1)
        isPass = false;
    else if (password.charCodeAt(password.length - 1) >= 65 &&
     password.charCodeAt(password.length - 1) <= 90)
        isPass = true;
    else if (password.charCodeAt(password.length - 1) <= 65 &&
        password.charCodeAt(password.length - 1) >= 90)
        isPass = false;
    return isPass;
}