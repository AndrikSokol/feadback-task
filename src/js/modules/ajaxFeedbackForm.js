"use strict";

export const ajaxFeedbackForm = (data) => {
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://localhost:9090/api/feedback");
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(data);

  xhttp.onload = () => {
    if (xhttp.status === 200) {
      const responseData = JSON.parse(xhttp.responseText);
      const form = document.querySelector(".form");
      let messageElement = document.querySelector(".form__result");
      if (!messageElement) messageElement = document.createElement("span");
      messageElement.classList.add("form__result");
      messageElement.innerText = responseData.msg;
      form.appendChild(messageElement);

      const nameInput = document.querySelector(".form__name");
      const emailInput = document.querySelector(".form__email");
      const phoneInput = document.querySelector(".form__phone");
      const messageTextarea = document.querySelector(".form__message");

      nameInput.value = "";
      emailInput.value = "";
      phoneInput.value = "";
      messageTextarea.value = "";
    }

    if (xhttp.status === 400) {
      const responseData = JSON.parse(xhttp.responseText);
      const feedback = document.querySelector(".feedback");

      if (typeof responseData.fields === "object") {
        for (const key in responseData.fields) {
          if (responseData.fields.hasOwnProperty(key)) {
            const field = responseData.fields[key];

            setTimeout(() => {
              const messageElement = document.createElement("span");
              messageElement.classList.add("warning");
              messageElement.innerText = field;
              feedback.appendChild(messageElement);
              setTimeout(() => {
                feedback.removeChild(messageElement);
              }, 3000);
            }, key * 3500);
          }
        }
      }
    }
  };
};
