const mainIndex = document.querySelector("main");
const h2Index = document.querySelector("h2");
const linkIndex = document.querySelector("a");
const paragraphIndex = document.querySelectorAll("p");

const userName = prompt("Ingrese su nombre");

// Verificar si el usuario ingresó un nombre
if (userName) {
    h2Index.innerHTML += ` ${userName}`; // Nombre del usario
  } else {
    h2Index.innerHTML += ' Invitado'; //En caso de que el usuario no coloque su nombre,
  }


  //Agregar a h2 uppercase

  h2Index.style.textTransform = 'uppercase';



//Cambiar el color de la etiqueta
  linkIndex.style.color = '#E51B3E';



  // Guardo la pregunta en una variable
  let confirmFondo = confirm('¿Desea cambiar el color de fondo?')

  if (confirmFondo) {
    document.body.classList.add('fondo');
  }





  paragraphIndex.forEach((p, index) => {
    if (index % 2 === 0) { // EL parrafp es es par
      p.classList.add('destacadoPar');
    } else { // El parrafo es impar
      p.classList.add('destacadoImpar');
    }
  });


  // Establecer la etiqueta <main> como visible
mainIndex.style.display = 'block';