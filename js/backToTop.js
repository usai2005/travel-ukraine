const toTopBtn = document.createElement("button");
console.log(toTopBtn);
toTopBtn.classList.add("to-top-btn");
toTopBtn.textContent = "вгору";

document.body.append(toTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    toTopBtn.style.display = "block";
    toTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  } else {
    toTopBtn.style.display = "none";
  }
});
