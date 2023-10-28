"use strict";

document
  .querySelector(".form__button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const nameInputElement = document.querySelector(".form__name");
    const emailInputElement = document.querySelector(".form__email");
    const phoneInputElement = document.querySelector(".form__phone");
    const messageTextareaElement = document.querySelector(".form__message");

    const elementsForValidate = [
      nameInputElement,
      emailInputElement,
      phoneInputElement,
      messageTextareaElement,
    ];

    function isValidEmail(email){
      const regex= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return regex.test(String(email).toLowerCase())
     }

    let isValidateInputs = true;
    elementsForValidate.forEach((element) => {
      const formControl = element.parentElement;
      const formError = formControl.querySelector(".form__error")
      if (element.value == "") {
        isValidateInputs = false;
        formControl.classList.add("form-control--error")
        formControl.classList.remove("form-control--success")
        formError.innerText="This field is required"
      } else if (element === emailInputElement && !isValidEmail(element.value)) {
        isValidateInputs = false;
        formControl.classList.add("form-control--error");
        formControl.classList.remove("form-control--success");
        formError.innerText = "Please enter a valid email address";
      } else {
        formError.innerText = "";
        formControl.classList.remove("form-control--error");
        formControl.classList.add("form-control--success");
      }
    })

    if(isValidateInputs)
    {
            
    }
  });
