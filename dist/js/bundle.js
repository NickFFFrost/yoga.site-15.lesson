/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calculator.js":
/*!************************************!*\
  !*** ./src/js/parts/calculator.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {

  let persons = document.querySelectorAll(".counter-block-input")[0],
    restDays = document.querySelectorAll(".counter-block-input")[1],
    place = document.getElementById("select"),
    totalValue = document.getElementById("total"),
    counter = document.querySelector(".counter"),
    personsSum = 0,
    daysSum = 0,
    total = 0;

  totalValue.innerHTML = 0;


  persons.addEventListener("change", function () {
    this.value = this.value.replace(/[\D]|^0/g, "");
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == "" || persons.value == "") {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total * place.options[place.selectedIndex].value;
    }
    if (this.value == 0) {
      this.value = this.value.replace(/0/, "");
    }
  });

  restDays.addEventListener("change", function () {
    this.value = this.value.replace(/[\D]|^0/g, "");
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (persons.value == "" || restDays.value == "") {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total * place.options[place.selectedIndex].value;
    }
    if (this.value == 0) {
      this.value = this.value.replace(/0/, "");
    }
  });

  place.addEventListener("change", function () {
    if (restDays.value == "" || persons.value == "") {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });

}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/forms.js":
/*!*******************************!*\
  !*** ./src/js/parts/forms.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {

  let message = {
    loading: "Загрузка...",
    success: "Спасибо! Мы скоро с вами свяжемся!",
    failure: "Что-то пошло не так..."
  };

  let statusMessage = document.createElement("div");

  statusMessage.classList.add("status");

  let formSend = (element) => {

    element.appendChild(statusMessage);

    function postData() {

      return new Promise(function (resolve, reject) {

        let request = new XMLHttpRequest();
        request.open("POST", "server.php");
        request.setRequestHeader("Content-Type", "application/json; charset=utf-8");

        let formData = new FormData(element);

        let obj = {};
        formData.forEach((value, key) => {
          obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener("readystatechange", () => {
          if (request.readyState < 4) {
            resolve();
          } else if (request.readyState === 4) {
            if (request.status == 200 && request.status < 3) {
              resolve();
            } else {
              reject();
            }
          }
        })

      });

    }

    let clearInputs = () => {
      for (let i = 0; i < element.length; i++) {
        element[i].value = "";
      }
    }

    postData(formSend)
      .then(() => (statusMessage.innerHTML = message.loading))
      .then(() => (statusMessage.innerHTML = message.success))
      .catch(() => (statusMessage.innerHTML = message.failure))
      .then(clearInputs);

  };


  document.addEventListener("submit", (event) => {
    event.preventDefault();
    formSend(event.target);
  });


  document.body.addEventListener("input", event => {

    if (event.target.getAttribute("type") === "tel") {
      event.target.value = "+" + event.target.value.replace(/[^0-9]/g, "").slice(0, 11);
      if (event.target.value.length == 1) {
        event.target.value = "";
      }
    }
  });

}

module.exports = form;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {

  let overlay = document.querySelector(".overlay"),
    isActiveBtn;

  let bindModal = (overlayStatus, overflowStatus, classListMethod, element) => {
    if (classListMethod == "add") {
      isActiveBtn = element;
    }
    if (!element) {
      element = isActiveBtn;
    }
    overlay.style.display = overlayStatus;
    element.classList[classListMethod]("more-splash");
    document.body.style.overflow = overflowStatus;
  }

  document.addEventListener("click", event => {
    let target = event.target;

    if (target.classList.contains("description-btn") || target.classList.contains("more")) {
      bindModal("block", "hidden", "add", target);
    }

    if (target.classList.contains("popup-close")) {
      bindModal("none", "", "remove");
    }

  });

}

module.exports = modal;

/***/ }),

/***/ "./src/js/parts/slide.js":
/*!*******************************!*\
  !*** ./src/js/parts/slide.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slide() {

  let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

  let showSliders = (n) => {

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }

    slides.forEach((item) => {
      item.style.display = "none"
    });

    dots.forEach((item) => {
      item.classList.remove("dot-active")
    });

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("dot-active");
  }
  showSliders(slideIndex);

  let plusSlides = (n) => {
    showSliders(slideIndex += n);
  }

  let currentSlides = (n) => {
    showSliders(slideIndex = n);
  }

  prev.addEventListener("click", () => {
    plusSlides(-1);
  });

  next.addEventListener("click", () => {
    plusSlides(1);
  });

  dotsWrap.addEventListener("click", () => {
    for (let i = 1; i < dots.length + 1; i++) {
      if (event.target.classList.contains("dot") && event.target == dots[i - 1]) {
        currentSlides(i);
      }
    }
  });

}

module.exports = slide;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {

  let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");

  let hideTabContent = (a) => {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }
  hideTabContent(1);

  let showTabContent = (b) => {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }

  info.addEventListener("click", (event) => {
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {

  let deadline = "2019-09-12";

  let getTimeRemaining = (endtime) => {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)));

    return {
      "total": t,
      "hours": hours,
      "minutes": minutes,
      "seconds": seconds
    };
  };

  const setClock = (id, endtime) => {
    let timer = document.getElementById(id),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds");

    const updateClock = () => {
      let t = getTimeRemaining(endtime),
        valueHours = t.hours.toString(),
        valueMinutes = t.minutes.toString(),
        valueSeconds = t.seconds.toString();

      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total <= 0 && t.hours <= 0 && t.minutes <= 0 && t.seconds <= 0) {
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        clearInterval(timeInterval);
        let massage = document.querySelector(".timer-action");
        massage.textContent = "Акция закончилась";
      }

      if (valueHours.length < 2) {
        hours.textContent = "0" + valueHours;
      } else if (valueMinutes.length < 2) {
        minutes.textContent = "0" + valueMinutes;
      } else if (valueSeconds.length < 2) {
        seconds.textContent = "0" + valueSeconds;
      }
    };
    let timeInterval = setInterval(updateClock, 1000);
  };

  setClock("timer", deadline);

}

module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let calc = __webpack_require__(/*! ./parts/calculator.js */ "./src/js/parts/calculator.js"),
      forms = __webpack_require__(/*! ./parts/forms.js */ "./src/js/parts/forms.js"),
      slide = __webpack_require__(/*! ./parts/slide.js */ "./src/js/parts/slide.js"),
      tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
      timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js"),
      modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js");

    calc();
    forms();
    slide();
    tabs();
    timer();
    modal();

});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map