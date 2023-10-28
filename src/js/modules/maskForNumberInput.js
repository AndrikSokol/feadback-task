"use strict";

import Inputmask from "inputmask";

var selector = document.querySelector(".form__phone");

var im = new Inputmask("+375(99)999-99-99");
im.mask(selector);
