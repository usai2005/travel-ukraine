const languageBtn = document.querySelector(".js-language-btn");
const toTopBtn = document.querySelector(".to-top-btn");
//searching for ALL elements in DOM and get pseudo array (allows to use forEach method for deal with every unit)
const ukrainianContent = document.querySelectorAll(".js-ua-language");
//searching for ALL elements in DOM and get pseudo array (allows to use forEach method for deal with every unit)
const englishContent = document.querySelectorAll(".js-en-language");

//adding class visually hidden for each element with eng content
englishContent.forEach((englishContentUnit) => {
  return englishContentUnit.classList.add("visually-hidden");
});

languageBtn.addEventListener("click", handleLanguageChanging);

function handleLanguageChanging() {
  //getting a textContent of btn into var
  let languageBtnTextContent = languageBtn.textContent;

  //if var === UA switch to eng (ternary operator)
  languageBtnTextContent === "UA" ? onSwitchToEnglish() : onSwitchToUkrainian();
}

function onSwitchToEnglish() {
  //change btn textContent to EN
  languageBtn.textContent = "EN";
  //and remove class(for slider.js)
  languageBtn.classList.remove("js-ua");
  //and remove class(for backToTop.js)
  languageBtn.classList.remove("to-top-ua");

  ukrainianContent.forEach((ukrainianContentUnit) => {
    //toggle class visually hidden(element appears or disappears)
    ukrainianContentUnit.classList.toggle("visually-hidden");
  });

  englishContent.forEach((englishContentUnit) => {
    //toggle class visually hidden(element appears or disappears)
    englishContentUnit.classList.toggle("visually-hidden");
  });
}

function onSwitchToUkrainian() {
  //change btn textContent to UA
  languageBtn.textContent = "UA";
  //and add class(for slider.js)
  languageBtn.classList.add("js-ua");
  //and add class(for backToTop.js)
  languageBtn.classList.add("to-top-ua");

  ukrainianContent.forEach((ukrainianContentUnit) => {
    //toggle class visually hidden(element appears or disappears)
    ukrainianContentUnit.classList.toggle("visually-hidden");
  });

  englishContent.forEach((englishContentUnit) => {
    //toggle class visually hidden(element appears or disappears)
    englishContentUnit.classList.toggle("visually-hidden");
  });
}
