//accessing the necessary elements of the DOM tree
const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector(".js-backdrop");

//adding click eventListeners to buttons and backdrop. By clicks start functions
openModalBtn.addEventListener("click", onOpenModal);
closeModalBtn.addEventListener("click", onCloseModal);
backdrop.addEventListener("click", onBackdropClick);

//function which opens modal window
function onOpenModal() {
  //adding keydown eventListener to ESC button in order to have a possibility to close modal with pushing ESC button using onEscKeyPress function
  window.addEventListener("keydown", onEscKeyPress);
  //adding class to body element. it's already described in CSS. Modal appears
  document.body.classList.add("show-modal");
}

//function closes modal window
function onCloseModal() {
  //removing eventListener from ESC button/ We don't need it more
  window.removeEventListener("keydown", onEscKeyPress);
  //removing class from body element. Modal disappears
  document.body.classList.remove("show-modal");
}

//function closes modal by clicking backdrop
function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    // if condition is true starts modal closing function
    onCloseModal();
  }
}

//function closes modal by pushing ESC button
function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";
  //checks if was pushed ESC button (isEscKey true or false)
  const isEscKey = event.code === ESC_KEY_CODE;

  //if true starts modal closing function
  if (isEscKey) {
    onCloseModal();
  }
}
