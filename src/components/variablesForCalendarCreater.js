const formElements = {
  formSelector: '.form',
  inputSelector: '.from__input',
  submitButtonSelector: '.btn',
  inactiveButtonClass: 'btn_disabled',
  inputErrorClass: 'form__input_type_error', //для input
  errorClass: 'form__input-error_visible' //для span
};

const formOfDateTrip = document.querySelector('.formOfDate');

export {
  formElements,
  formOfDateTrip
}
