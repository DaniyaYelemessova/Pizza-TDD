import Pizza from './pizza.js';
import './css/styles.css';

function reset(){
  const form = document.querySelector("#form");
  form.reset();
}

function handlePizzaForm(e) {
  e.preventDefault();
  const orderName = document.getElementById("name").value;
  const sizeSelection = document.querySelector("input[name='size']:checked").value;
  const toppingsSelection = document.querySelectorAll("input[name=topping]:checked");
  const toppingsSelectionArray = Array.from(toppingsSelection).map(
    (topping) => topping.value
  );
  if(toppingsSelectionArray.length === 0){
    document.querySelector("#warning").removeAttribute("class");
  }

  document.querySelector("#warning").classList.add("hidden");
  const newPizza = new Pizza(toppingsSelectionArray, sizeSelection);

  const welcomeName = document.querySelector("#welcome");
  welcomeName.textContent = `Thank you for your order, ${orderName}!`;

  const sizeOutput = document.querySelector("#sizeOutput");
  sizeOutput.textContent = `Your size: ${sizeSelection}.`;
  const toppingsOutput = document.querySelector("#toppingsOutput");
  toppingsOutput.textContent = `Toppings: ${toppingsSelectionArray.join(" , ")}`;
  const totalPrice = document.querySelector("#totalPrice");
  totalPrice.textContent = `Final price: $${newPizza.finalPrice()}`;

  reset();
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#form");
  form.addEventListener("submit", handlePizzaForm);
});
