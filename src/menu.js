// import the images
import Diavola from "./images/Diavola.jpg";
import Regina from "./images/Regina.jpg";
import Olive from "./images/Olive.jpg";
import FourCheese from "./images/4Cheese.jpg";

// Add the image to our existing div.
const diavola = new Image();
diavola.src = Diavola;

const regina = new Image();
regina.src = Regina;

const olive = new Image();
olive.src = Olive;

const fourcheese = new Image();
fourcheese.src = FourCheese;

// Define the array of objects
const pizzaOnMenu = [
  { name: "Divola", description: "the hottest 🌶️", img: Diavola },
  { name: "Regina", description: "the lightest 🪶", img: Regina },
  { name: "Olive", description: "our speciality 🧑🏼‍🍳", img: Olive },
  { name: "Four Cheese", description: "the heaviest 🌝", img: FourCheese },
];

// Define the menu component
const menu = () => {
  return (
    `<div class="row" id="menu" style="display:none">` +
    pizzaOnMenu
      .map((pizza) => {
        return `<div class="col-lg-12 text-center pizzaMenu">
  
    <h1>${pizza.name}</h1>
    <p>${pizza.description}</p>
    <img src= ${pizza.img} id="pizza">
  
  </div>`;
      })
      .join("") +
    `</div>`
  );
};

export { menu };
