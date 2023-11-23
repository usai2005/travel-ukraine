// getting element from DOM
const languageBtn = document.querySelector(".js-language-btn");
const toTopBtn = document.querySelector(".js-to-top-btn");

// //creating a toTop button (by default it's blocking in CSS via display: none;)
// const toTopBtn = document.createElement("button");

// //adding classes to button element
// toTopBtn.classList.add("to-top-btn");
// toTopBtn.classList.add("to-top-ua");

toTopBtn.textContent = "вгору";

//adding ukr or eng text to button element
//adding listener to language btn and start to top btn language choosing func
languageBtn.addEventListener("click", choseToTopBtnLanguage);

//language choosing func
function choseToTopBtnLanguage(e) {
  //if events target contains class js-ua we start one or another func
  if (e.target.classList.contains("js-ua")) {
    toTopBtn.textContent = "to top";
  } else {
    toTopBtn.textContent = "вгору";
  }
}

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
