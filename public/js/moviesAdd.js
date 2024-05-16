alert("archivo vinculado")
const h1Add = document.querySelector('h1');
const sectionAdd = document.querySelector('section');
const articleAdd = document.querySelector('article');

// Agregar mensaje y clase a la etiqueta <h1>
h1Add.textContent = 'AGREGAR PELÍCULAS';
h1Add.classList.add('titulo');



// Agregar clase al <article>
articleAdd.classList.add('fondoTransparente');

// Agregar clase a la <section>
sectionAdd.classList.add('fondoCRUD');