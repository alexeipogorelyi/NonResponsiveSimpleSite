const openPopup = document.querySelector('.contacts-button');
const popup = document.querySelector('.popup');
const closePopup = popup.querySelector('.popup-close');
const loginForm = popup.querySelector('form');
const loginIn = popup.querySelector('.feedback-name');
const emailIn = popup.querySelector('.feedback-email');
const feedbackIn = popup.querySelector('.feedback-feedback');


let isStorageSupport = true;
let storageLogin = '';
let storageEmail = '';

try {
    storageLogin = localStorage.getItem('login');
    storageEmail = localStorage.getItem('email');
    storageFeedback = localStorage.getItem('feedback');
} catch (err) {
    isStorageSupport = false;
}


openPopup.addEventListener('click', function() {
    popup.classList.add('popup-show');

    if(storageLogin) {
        loginIn.value = storageLogin;
    }

    if(storageLogin && !storageEmail) {
        loginIn.value = storageLogin;
        emailIn.focus();
    }

    if(storageLogin && storageEmail) {
        loginIn.value = storageLogin;
        emailIn.value = storageEmail;
        feedbackIn.focus();
    }



    loginIn.focus();
})

closePopup.addEventListener('click', function() {
    popup.classList.remove('popup-show');
    popup.classList.remove('popup-error');
})

loginForm.addEventListener('submit', function(evt) {
    if(!loginIn.value || !emailIn.value || !feedbackIn.value) {
        evt.preventDefault();
        popup.classList.remove('popup-error');
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add('popup-error');
    }
    else {
        if (isStorageSupport) {
            localStorage.setItem('login', loginIn.value);
            localStorage.setItem('email', emailIn.value);
        }
    }
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("popup-show")) {
        evt.preventDefault();
        popup.classList.remove("popup-show");
        popup.classList.remove('popup-error');
      }
    }
  });