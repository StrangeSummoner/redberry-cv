const getFirstName = document.getElementById("first-name-getter");
const getLastName = document.getElementById("last-name-getter");
const getAbout = document.getElementById("about-getter");
const email = document.getElementById("email-getter");
const mobile = document.getElementById("mobile-getter");

document.getElementById("first-name-setter").innerHTML = localStorage.getItem('firstName');
document.getElementById("last-name-setter").innerHTML = localStorage.getItem('lastName');
document.getElementById("about-setter").innerHTML = localStorage.getItem('getAbout');
document.getElementById("email-setter").innerHTML = localStorage.getItem('email');
document.getElementById("mobile-setter").innerHTML = localStorage.getItem('mobile');

function firstNameSetter() {
    // first name
    localStorage.setItem('firstName', getFirstName.value);
    document.getElementById("first-name-setter").innerHTML = localStorage.getItem('firstName');
}

function lastNameSetter() {
    // first name
    localStorage.setItem('lastName', getLastName.value);
    document.getElementById("last-name-setter").innerHTML = localStorage.getItem('lastName');
}

function aboutSetter(){
    // about
    localStorage.setItem('getAbout', getAbout.value);
    document.getElementById("about-setter").innerHTML = localStorage.getItem('getAbout');
}

function emailSetter(){
    // email
    localStorage.setItem('email', email.value);
    document.getElementById("email-setter").innerHTML = localStorage.getItem('email');
}

function mobileSetter(){
    // mobile
    localStorage.setItem('mobile', mobile.value);
    document.getElementById("mobile-setter").innerHTML = localStorage.getItem('mobile');
}



