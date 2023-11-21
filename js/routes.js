import {
  routesOne,
  routesTwo,
  routesThree,
  routesFour,
  routesFive,
} from "../data/routesData.js";

// getting elements from DOM
const routes = document.querySelector(".routes-list");
const tableBody = document.querySelector(".js-table-body");

//adding eventListener to buttons
routes.addEventListener("click", handleRouteChose);

//handling route choosing click event
function handleRouteChose(e) {
  //avoiding reaction on clicking outside buttons
  if (e.target.nodeName !== "LI") {
    return;
  }

  //getting data-attribute value of clicked button
  const chosenRoute = e.target.dataset.route;

  //depending on which button was clicked starting a function which makes a table using data of chosen route as argument
  switch (chosenRoute) {
    case "firstRoute":
      makeRouteTableRowMarkup(routesOne);
      break;
    case "secondRoute":
      makeRouteTableRowMarkup(routesTwo);
      break;
    case "thirdRoute":
      makeRouteTableRowMarkup(routesThree);
      break;
    case "fourthRoute":
      makeRouteTableRowMarkup(routesFour);
      break;
    case "fifthRoute":
      makeRouteTableRowMarkup(routesFive);
      break;

    default:
      break;
  }
}

//function which makes the ta,ke
function makeRouteTableRowMarkup(currentRoutes) {
  //clearing DOM element
  tableBody.innerHTML = "";

  let makeRouteTableRows = "";

  // making a table markup using map method and then join
  makeRouteTableRows = currentRoutes
    .map(
      (singleRoute) =>
        `<tr><td>${singleRoute.direction}</td><td>${singleRoute.transfer}</td><td>${singleRoute.distance}</td><td>${singleRoute.transferPrice}</td><td>${singleRoute.excursionPrice}</td><td>${singleRoute.guidePrice}</td></tr>`
    )
    .join("");

  //function returns the table markup
  return tableBody.insertAdjacentHTML("beforeend", makeRouteTableRows);
}
