"use strict";

import Inputmask from "inputmask";

const selector = document.querySelector(".form__phone");

const im = new Inputmask("+375(99)999-99-99");
im.mask(selector);
