import {
  routesOne,
  routesTwo,
  routesThree,
  routesFour,
  routesFive,
} from "../data/routesData.js";

const routes = document.querySelector(".routes-list");
const tableBody = document.querySelector(".js-table-body");

// let makeRouteTableRows = "";

// console.log(routes);
routes.addEventListener("click", handleRouteChose);

function handleRouteChose(e) {
  if (e.target.nodeName !== "LI") {
    return;
  }

  const chosenRoute = e.target.dataset.route;

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

function makeRouteTableRowMarkup(currentRoutes) {
  tableBody.innerHTML = "";

  let makeRouteTableRows = "";

  makeRouteTableRows = currentRoutes
    .map(
      (singleRoute) =>
        `<tr><td>${singleRoute.direction}</td><td>${singleRoute.transfer}</td><td>${singleRoute.distance}</td><td>${singleRoute.transferPrice}</td><td>${singleRoute.excursionPrice}</td><td>${singleRoute.guidePrice}</td></tr>`
    )
    .join("");

  return tableBody.insertAdjacentHTML("beforeend", makeRouteTableRows);
}
