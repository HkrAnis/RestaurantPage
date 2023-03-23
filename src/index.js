import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Pizza from "./images/4K.jpg";
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

// Create the background image
const pizza = new Image();
pizza.src = Pizza;

// Change the background image
const selectBody = document.body.style;
selectBody.backgroundImage = `url(${Pizza})`;
selectBody.backgroundRepeat = "no-repeat";
selectBody.backgroundPosition = "top center";
selectBody.backgroundSize = "cover";
selectBody.backgroundAttachment = "fixed";
selectBody.width = "99vw";

// Add the components to the page
document
  .querySelector("#core")
  .insertAdjacentHTML("afterbegin", home() + contact() + menu());

// Set up the navigation
document
  .querySelector(".navHome")
  .addEventListener(
    "click",
    () =>
      (document.querySelector("#menu").style.display = "none") &&
      (document.querySelector("#home").style.display = "block") &&
      (document.querySelector("#contact").style.display = "none")
  );

document
  .querySelector(".navMenu")
  .addEventListener(
    "click",
    () =>
      (document.querySelector("#home").style.display = "none") &&
      (document.querySelector("#menu").style.display = "block") &&
      (document.querySelector("#contact").style.display = "none")
  );

document
  .querySelector(".navContact")
  .addEventListener(
    "click",
    () =>
      (document.querySelector("#home").style.display = "none") &&
      (document.querySelector("#menu").style.display = "none") &&
      (document.querySelector("#contact").style.display = "block")
  );
