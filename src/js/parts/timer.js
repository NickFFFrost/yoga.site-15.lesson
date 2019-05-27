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