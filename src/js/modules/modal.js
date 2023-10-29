const openModalBtn = document.querySelector(".button-modal--open");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".button-modal--close");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("modal--active");
  document.body.style.overflow = "hidden";
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("modal--active");
  document.body.style.overflow = "auto";
});

modal.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.classList.remove("modal--active");
    document.body.style.overflow = "auto";
  }
});
