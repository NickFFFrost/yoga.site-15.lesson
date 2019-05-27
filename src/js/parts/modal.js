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