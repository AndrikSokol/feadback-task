const openModalBtn = document.querySelector(".button-modal--open");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".button-modal--close");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

modal.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
