const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const subject =document.querySelector("#subject");
const message = document.querySelector("#message");
const button = document.querySelector(".btn-submit");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const subjectError = document.querySelector("#subjectError");
const messsageError = document.querySelector("#messageError");

function validateForm() {
    event.preventDefault();

    if (checklength(fullName.value, 5) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block"
    }

    if (checklength(subject.value, 15) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (checklength(message.value, 25) === true) {
        messsageError.style,display = "none";
    } else {
        messsageError.style,display = "block";
    }
}

form.addEventListener("submit", validateForm);


function formSubmit(event)  {
    event.preventDefault();
    message.innerHTML = `<div class="message">Thank you for contacting us. We can't wait to hear from you!.</div>`;
    form.reset();
}

form.addEventListener("submit", formSubmit);

function checklength (value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const reqExample  = /\S+@\S+\.\S+/;
    const patternMatches = reqExample.test(email);
    return patternMatches;
}
