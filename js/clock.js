const clock = document.querySelector(".clock");

function digitalClock() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  // adding zero before value if it's less than 10

  if (hours < 10) hours = `0${hours}`;
  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;
  if (day < 10) day = `0${day}`;
  if (month < 10) month = `0${month}`;

  clock.innerHTML = `<p>${hours} : ${minutes} : ${seconds}</p><p>${day} : ${
    month + 1
  } : ${year}</p>`;
}

setInterval(() => {
  digitalClock();
}, 1000);
