const password = document.getElementById('password');
const passValue = password.value;
const toggleBtn = document.getElementById('toggleBtn');

const lowerCase = document.getElementById('lower');
const upperCase = document.getElementById('upper');
const digit = document.getElementById('number');
const specialChar = document.getElementById('special');
const minLength = document.getElementById('length');

//check password
const checkPassword = (data) => {
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');

    // lowercase validation check
    if(lower.test(data))
    {
        lowerCase.classList.add('valid');
    } else {
        lowerCase.classList.remove('valid');
    }

    // upperCase validation check
    if(upper.test(data))
    {
        upperCase.classList.add('valid');
    } else {
        upperCase.classList.remove('valid');
    }

    // nuber validation check
    if(number.test(data))
    {
        digit.classList.add('valid');
    } else {
        digit.classList.remove('valid');
    }

    // special character validation check
    if(special.test(data))
    {
        specialChar.classList.add('valid');
    } else {
        specialChar.classList.remove('valid');
    }

    // length validation check
    if(password.value.length >= 8)
    {
        minLength.classList.add('valid');
    } else {
        minLength.classList.remove('valid');
    }
}

// show hide password
toggleBtn.onclick = function(){
    if(password.type === 'password'){
        password.setAttribute('type', 'text');
        toggleBtn.classList.add('hide');
    } else {
        password.setAttribute('type', 'password');
        toggleBtn.classList.remove('hide');
    }
}