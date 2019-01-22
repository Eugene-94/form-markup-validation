'use strict';

(function () {
  var openPopupBtn = document.querySelector('.sign-up__btn');
  var modal = document.querySelector('.modal');
  var closePopupBtn = modal.querySelector('.modal__close');
  var inputs = modal.querySelectorAll('input');
  var labels = modal.querySelectorAll('.form__input-title');
  var form = modal.querySelector('.form');
  var emailInput = modal.querySelector('input[type="email"]');
  var error = modal.querySelector('.error');
  var selects = modal.querySelectorAll('select');
  var dateSelect = modal.querySelector('#date');

  console.log(selects[2].required);

  var errors = {
    "date": "You forgot to choose the date",
    "name": "You forgot to fill your name",
    "surname": "You forgot to fill your surname",
    "email": "You forgot to fill your email"
  }

  function openPopup () {
    modal.classList.add('active');
  }

  function closePopup () {
    modal.classList.remove('active');
  }


selects.forEach(function (value, index) {
  selects[index].addEventListener('change', function () {
    if (selects[index].value) {
      selects[index].parentElement.classList.remove('incorrect');
      selects[index].parentElement.classList.add('correct');
    } else {
      selects[index].parentElement.classList.remove('correct');
      selects[index].parentElement.classList.remove('incorrect');
    }
  })
});

inputs.forEach(function (value, index) {
  inputs[index].addEventListener("input", function (evt) {
    if (!inputs[index].validity.valid) {
      inputs[index].nextElementSibling.innerHTML = "Invalid format";
      inputs[index].parentElement.classList.add('incorrect');
    } else {
      inputs[index].nextElementSibling.innerHTML = "";
      inputs[index].parentElement.classList.remove('incorrect');
      inputs[index].parentElement.classList.add('correct');
    }
  });
});


  function checkSelect (evt) {
    selects.forEach(function(value, index) {
      if (selects[index].required && !selects[index].value) {
        evt.preventDefault();
        selects[index].nextElementSibling.innerHTML = errors[selects[index].id];
        selects[index].parentElement.classList.add('incorrect');
      }
    })
  };

  function checkInputs (evt) {
    inputs.forEach(function(value, index) {
      if (inputs[index].required && !inputs[index].value) {
        evt.preventDefault();
        inputs[index].nextElementSibling.innerHTML = errors[inputs[index].id];
        inputs[index].parentElement.classList.add('incorrect');
      }
    })
  }

  function formValidation () {

  }

  openPopupBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPopup();
  });
  closePopupBtn.addEventListener('click', closePopup);

  inputs.forEach(function (value, index) {
    inputs[index].addEventListener('focus', function () {
      labels[index].classList.remove('form__input-title--nonfilled');
      labels[index].classList.add('form__input-title--filled');
    });

    inputs[index].addEventListener('blur', function () {
      if (!inputs[index].value) {
        labels[index].classList.add('form__input-title--nonfilled');
        labels[index].classList.remove('form__input-title--filled');
      }
    });
  });

  form.addEventListener("submit", function (evt) {
    checkSelect(evt);
    checkInputs(evt);
  });
})();
