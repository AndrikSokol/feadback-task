"use strict";

document
  .querySelector(".form__button")
  .addEventListener("click", function (event) {
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

    event.preventDefault();

    elementsForValidate.forEach((element) => {
      if (element.value == "") {
        element.style.border = "1px solid red";
        element.innerHTML = "<p>This is field is required<p>";
        element.appendChild(warningSpan);
        setTimeout(
          () => (element.style.border = "1px solid transparent"),
          5000
        );
      }
    });
  });
