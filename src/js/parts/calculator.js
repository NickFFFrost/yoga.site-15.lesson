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