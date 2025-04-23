
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
document.writeln(`</ul>`)

// - Agregar elementos al array (al final) (unshift())
document.writeln(`<h3>Agregar un elemento al principio del array</h3>`);
comidas.unshift("Tortilla de papas", "Pizza");

document.writeln(`<ul>`)
for(let i = 0; i < comidas.length; i++) {
  document.writeln(`<li>${comidas[i]}</li>`)
}
document.writeln(`</ul>`)

// - Agregar elementos al array (al inicio) (unshift())
document.writeln(`<h3>Agregar un elemento al principio del array</h3>`);
comidas.push("Ensalada");

document.writeln(`<ul>`)
for(let i = 0; i < comidas.length; i++) {
  document.writeln(`<li>${comidas[i]}</li>`)
}
document.writeln(`</ul>`)

// - Agregar un elemento en el medio del array 
document.writeln(`<h3>Agregar un elemento en e; medio del array</h3>`);
comidas.splice(3, 0, "Fideos");

document.writeln(`<ul>`)
for(let i = 0; i < comidas.length; i++) {
  document.writeln(`<li>${comidas[i]}</li>`)
}
document.writeln(`</ul>`)

// - BORRAR ELEMENTOS DE UN ARRAY, AL PRINCIPIO
document.writeln(`<h3>Borrar un elemento al principio del array</h3>`);
comidas.shift()

document.writeln(`<ul>`)
for(let i = 0; i < comidas.length; i++) {
  document.writeln(`<li>${comidas[i]}</li>`)
}
document.writeln(`</ul>`)

// - BORRAR ELEMENTOS DE UN ARRAY, AL FINAL
document.writeln(`<h3>Borrar un elemento al final del array</h3>`);
comidas.pop()

document.writeln(`<ul>`)
for(let i = 0; i < comidas.length; i++) {
  document.writeln(`<li>${comidas[i]}</li>`)
}
document.writeln(`</ul>`)

// - BORRAR ELEMENTOS DE UN ARRAY, EN EL MEDIO
document.writeln(`<h3>Borrar un elemento en el medio del array</h3>`);
comidas.splice(3,1)//borrar desde la posicion 3 en adelante, 1 lemento
//comidas.splice(3,2)//borrar desde la posicion 3 en adelante, 2 elementos
//comidas.splice(3)//borra desde la posicion 3, todo lo que sigue

document.writeln(`<ul>`)
for(let i = 0; i < comidas.length; i++) {
  document.writeln(`<li>${comidas[i]}</li>`)
}
document.writeln(`</ul>`)

// - MODIFICAR ELEMENTOS DE UN ARRAY
document.writeln(`<h3>Modificar un elemento del array</h3>`);

comidas[4] = "Hamburguesa"

document.writeln(`<ul>`)
for(let i = 0; i < comidas.length; i++) {
  document.writeln(`<li>${comidas[i]}</li>`)
}
document.writeln(`</ul>`)