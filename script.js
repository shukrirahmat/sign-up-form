const password = document.querySelector('#password');
const confirmpw = document.querySelector('#confirmpw');
const pwbox = document.querySelector('.pwbox')

password.addEventListener('input',checkPassword)
confirmpw.addEventListener('input',checkPassword)

function checkPassword() {
    if (password.value === confirmpw.value) {
        password.classList.remove("error");
        confirmpw.classList.remove("error");
        pwbox.classList.remove("notmatch");
    } else {
        password.classList.add("error");
        confirmpw.classList.add("error");
        pwbox.classList.add("notmatch");
    }
}


