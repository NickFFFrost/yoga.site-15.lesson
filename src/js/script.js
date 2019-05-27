window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let calc = require("./parts/calculator.js"),
      forms = require("./parts/forms.js"),
      slide = require("./parts/slide.js"),
      tabs = require("./parts/tabs.js"),
      timer = require("./parts/timer.js"),
      modal = require("./parts/modal.js");

    calc();
    forms();
    slide();
    tabs();
    timer();
    modal();

});