
// --- ARRAYS ---

// - Declarar un array vacio
const paises = [];

// - Array con datos
const comidas = ["tacos", "sushi", "pasta", "asado"];

// - Mostrar array en consola
console.log(paises);
console.log(comidas);

// - Mostrar array en html
document.writeln(paises + "<br>");
document.writeln(comidas);
document.writeln("<br><br> Cantidad de elementos en el array: " + comidas.length);

document.writeln(`<ul>`)
for(let i = 0; i < comidas.length; i++) {
  document.writeln(`<li>${comidas[i]}</li>`)
}
document.writeln(`<ul>`)

// - Mostrar array con bucle