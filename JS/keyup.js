const getFirstName = document.getElementById("first-name-getter");
const getLastName = document.getElementById("last-name-getter");
const getAbout = document.getElementById("about-getter");
const email = document.getElementById("email-getter");
const mobile = document.getElementById("mobile-getter");

let onlyGeorgian = /^[\u10A0-\u10FF]{2,}\s*$/;
let onlyRedberryEmail = /^\S+@redberry\.ge$/;
let onlyGeorgianphoneNumber =  /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/; // /^\+995\s5\d{2}\s\d{2}\s\d{2}$/;

document.getElementById("first-name-setter").innerHTML = localStorage.getItem('firstName');
document.getElementById("last-name-setter").innerHTML = localStorage.getItem('lastName');
document.getElementById("about-setter").innerHTML = localStorage.getItem('getAbout');
document.getElementById("email-setter").innerHTML = localStorage.getItem('email');
document.getElementById("mobile-setter").innerHTML = localStorage.getItem('mobile');

function firstNameSetter() {
    // first name
    localStorage.setItem('firstName', getFirstName.value);
    document.getElementById("first-name-setter").innerHTML = localStorage.getItem('firstName');
    //document.querySelectorAll('input')[0].style.borderColor= "#BCBCBC";

    // validate
    if (onlyGeorgian.test(localStorage.getItem('firstName'))){
        document.querySelectorAll('.input-name')[0].style.color="black"; // top name of field, back to normal color
        document.querySelectorAll('.warning .warning-icon')[0].style.display="none"; // reset the warning icon
        document.querySelectorAll('.correct img')[0].style.display="inline"; // disable correct icon
        document.querySelectorAll('input')[0].style.borderColor= "#98E37E"; // toggle input border as green
    } else {
        console.log(document.querySelectorAll('.input-name')[0]);
        document.querySelectorAll('.input-name')[0].style.color="red"; // top name of field, mark red to warn!
        document.querySelectorAll('.warning .warning-icon')[0].style.display="inline"; // display warning icon
        document.querySelectorAll('.correct img')[0].style.display= "none"; // disable correct icon
        document.querySelectorAll('input')[0].style.borderColor= "red"; // toggle input border as red to warn!
    }
}

function lastNameSetter() {
    // last name
    localStorage.setItem('lastName', getLastName.value);
    document.getElementById("last-name-setter").innerHTML = localStorage.getItem('lastName');

    if (onlyGeorgian.test(localStorage.getItem('lastName'))){
        document.querySelectorAll('.input-name')[1].style.color="black"; // top name of field, back to normal color
        document.querySelectorAll('.warning .warning-icon')[1].style.display="none"; // reset the warning icon
        document.querySelectorAll('.correct img')[1].style.display="inline"; // disable correct icon
        document.querySelectorAll('input')[1].style.borderColor= "#98E37E"; // toggle input border as green
    } else {
        document.querySelectorAll('.input-name')[1].style.color="red"; // top name of field, mark red to warn!
        document.querySelectorAll('.warning .warning-icon')[1].style.display="inline"; // display warning icon
        document.querySelectorAll('.correct img')[1].style.display= "none"; // disable correct icon
        document.querySelectorAll('input')[1].style.borderColor= "red"; // toggle input border as red to warn!
    }
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

    if (onlyRedberryEmail.test(localStorage.getItem('email'))){
        document.querySelectorAll('.input-name')[3].style.color="black"; // top name of field, back to normal color
        document.querySelectorAll('.warning .warning-icon')[2].style.display="none"; // reset the warning icon
        document.querySelectorAll('.correct img')[2].style.display="inline"; // disable correct icon
        document.querySelectorAll('input')[3].style.borderColor= "#98E37E"; // toggle input border as green
    } else {
        document.querySelectorAll('.input-name')[3].style.color="red"; // top name of field, mark red to warn!
        document.querySelectorAll('.warning .warning-icon')[2].style.display="inline"; // display warning icon
        document.querySelectorAll('.correct img')[2].style.display= "none"; // disable correct icon
        document.querySelectorAll('input')[3].style.borderColor= "red"; // toggle input border as red to warn!
    }
}

function mobileSetter(){
    // mobile
    localStorage.setItem('mobile', mobile.value);
    document.getElementById("mobile-setter").innerHTML = localStorage.getItem('mobile');

    if (onlyGeorgianphoneNumber.test(localStorage.getItem('mobile'))){
        document.querySelectorAll('.input-name')[4].style.color="black"; // top name of field, back to normal color
        document.querySelectorAll('.warning .warning-icon')[3].style.display="none"; // reset the warning icon
        document.querySelectorAll('.correct img')[3].style.display="inline"; // disable correct icon
        document.querySelectorAll('input')[4].style.borderColor= "#98E37E"; // toggle input border as green
    } else {
        document.querySelectorAll('.input-name')[4].style.color="red"; // top name of field, mark red to warn!
        document.querySelectorAll('.warning .warning-icon')[3].style.display="inline"; // display warning icon
        document.querySelectorAll('.correct img')[3].style.display= "none"; // disable correct icon
        document.querySelectorAll('input')[4].style.borderColor= "red"; // toggle input border as red to warn!
    }
}
