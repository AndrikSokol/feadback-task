"use strict";

import { ajaxFeedbackForm } from "./ajaxFeedbackForm";

document
  .querySelector(".form__button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const nameInput = document.querySelector(".form__name");
    const emailInput = document.querySelector(".form__email");
    const phoneInput = document.querySelector(".form__phone");
    const messageTextarea = document.querySelector(".form__message");

    const elementsForValidate = [
      nameInput,
      emailInput,
      phoneInput,
      messageTextarea,
    ];

    function isValidEmail(email) {
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return regex.test(String(email).toLowerCase());
    }

    let isValidateInputs = true;
    const invalidFields = {};
    elementsForValidate.forEach((element) => {
      const formControl = element.parentElement;
      const formError = formControl.querySelector(".form__error");
      if (element.value == "") {
        isValidateInputs = false;
        formControl.classList.add("form-control--error");
        formControl.classList.remove("form-control--success");
        formError.innerText = "This field is required";
        invalidFields[element.getAttribute("id")] = "This field is required";
      } else if (element === emailInput && !isValidEmail(element.value)) {
        isValidateInputs = false;
        formControl.classList.add("form-control--error");
        formControl.classList.remove("form-control--success");
        formError.innerText = "Please enter a valid email address";
        invalidFields[element.getAttribute("id")] =
          "Please enter a valid email address";
      } else {
        formError.innerText = "";
        formControl.classList.remove("form-control--error");
        formControl.classList.add("form-control--success");
      }
    });

    if (isValidateInputs) {
      const feedback = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        message: messageTextarea.value,
      };
      const data = JSON.stringify(feedback);
      ajaxFeedbackForm(data);
    } else {
      const data = JSON.stringify({ fields: invalidFields });
      ajaxFeedbackForm(data);
    }
  });
