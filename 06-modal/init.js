const modal = document.querySelector(".modal-overlay");

const modalBtn = document.querySelector(".modal-btn");
const modalCloseBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

modalCloseBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
