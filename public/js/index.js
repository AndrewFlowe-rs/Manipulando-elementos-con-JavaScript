const mainElement = document.querySelector("main");
const h2Element = document.querySelector("h2");
const linkElement = document.querySelector("a");
const paragraphElements = document.querySelectorAll("p");

const userName = prompt("Ingrese su nombre");


if (userName) {
    h2Element.textContent += userName;
  } else {
    h2Element.textContent += 'Invitado';
  }