const password = document.querySelector('#password');
const confirmpw = document.querySelector('#confirmpw');
const pwbox = document.querySelector('.pwbox')
const submitbtn = document.querySelector('button');

password.addEventListener('input',checkPassword)
confirmpw.addEventListener('input',checkPassword)

function checkPassword() {
    if (password.value === confirmpw.value) {
        password.classList.remove("error");
        confirmpw.classList.remove("error");
        pwbox.classList.remove("notmatch");
        submitbtn.disabled = false;
    } else {
        password.classList.add("error");
        confirmpw.classList.add("error");
        pwbox.classList.add("notmatch");
        submitbtn.disabled = true;
    }
}


