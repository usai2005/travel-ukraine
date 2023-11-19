import {
  routesOne,
  routesTwo,
  routesThree,
  routesFour,
  routesFive,
} from "./data/routes.js";

const routes = document.querySelector(".routes-list");

const tableElement = document.querySelector(".js-travelRoute-table");

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

function makeRouteTableRowMarkup(currentRoute) {
  tableElement.innerHTML = "";

  let makeRouteTableRows = "";

  makeRouteTableRows = currentRoute
    .map(
      (routeOne) =>
        `<tr><td>${routeOne.direction}</td><td>${routeOne.transfer}</td><td>${routeOne.distance}</td><td>${routeOne.transferPrice}</td><td>${routeOne.excursionPrice}</td><td>${routeOne.guidePrice}</td></tr>`
    )
    .join("");

  return tableElement.insertAdjacentHTML("beforeend", makeRouteTableRows);
}
