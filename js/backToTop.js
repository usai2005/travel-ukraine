//creating a toTop button (by default it's blocking in CSS via display: none;)
const toTopBtn = document.createElement("button");

//adding class to button element
toTopBtn.classList.add("to-top-btn");

//adding text to button element
toTopBtn.textContent = "вгору";

//adding the button to DOM on body element
document.body.append(toTopBtn);

//adding eventListener to window on scroll event
window.addEventListener("scroll", () => {
  //if window was scrolled on more than 250px on Y axis in CSS display: none; changes on display: flex; and button appears. Then we add click eventListener to toTop button and after click page scrolls to its top smoothly
  if (window.scrollY > 250) {
    toTopBtn.style.display = "flex";
    toTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  } else {
    //if less then 250 px the button disappears again
    toTopBtn.style.display = "none";
  }
});
