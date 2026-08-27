import  catalogar  from "./catalogar.js";


const form = document.querySelector("#catalogar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const number=parseInt(document.querySelector("#numero").value, 10);

  div.innerHTML = "<p>" + catalogar(number) + "</p>";
});
