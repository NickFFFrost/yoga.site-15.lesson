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