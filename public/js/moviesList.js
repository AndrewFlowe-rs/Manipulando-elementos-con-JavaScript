const bodyMovie = document.querySelector('body')
const h1Movie = document.querySelector('h1');


// Preguntar al usuario si quiere el  modo oscuro
const darkMode = confirm('¿Desea modo oscuro?');
// Si la respuesta es afirmativa, aplicar modo oscuro
if (darkMode) {
    bodyMovie.style.backgroundColor = '#7f7f7f';
    bodyMovie.classList.add('fondoMoviesList');
  }



  // Agregar mensaje y estilos a la etiqueta <h1>
  h1Movie.textContent = 'LISTADO DE PELÍCULAS';
  h1Movie.style.color = 'white';
  h1Movie.style.backgroundColor = 'teal';
  h1Movie.style.padding = '20px';