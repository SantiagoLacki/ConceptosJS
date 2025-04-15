// Esto es un comentario de una linea ES6 - 2015 //

/* Esto es un comentario
de multiples lineas. */

console.log ("Hola Mundo");

document.writeln("<p class='parrafoResaltado'>Hola de nuevo</p>");
document.writeln("<a href='http://127.0.0.1:5500/index.html'>Live server</a>");

// Ventana emergente.
// alert("Esto es un mensaje en un alert");

// Como declarar una variable (let, const, var(NO USAR)).

let anioActual; // Declaracion

let precio = 20.5; // Declaracion y asignacion al mismo tiempo

anioActual = 2025; // Inicializacion

// Mostrar un texto mas el valor de la variable
document.writeln("<br>El año actual es: ", anioActual);
document.writeln("<br>El año actual es: "+ anioActual);

anioActual = 2024; // Actualizacion de la variable
document.writeln("<br>Ahora el contenido de la variable anioActual es: ", anioActual);

const url = "http://127.0.0.1:5500/index.html";

document.writeln("<br>La direccion del Live Server es: ", url);

// Reasignar una variable Constante (const), NO SE PUEDE HACER!
// url = 20;
// document.writeln("<br>El valor de url es: ", url);


// Suma de dos numeros (Ejemplo de PSeInt).

//const numero1 = parseInt(prompt("Ingrese el primer numero a sumar: "))
//const numero2 = parseInt(prompt("Ingrese el segundo numero a sumar: "))

console.log(numero1)
console.log(numero2)

document.writeln("<br/> El resultado de la suma de los numeros ingresados es: "+ (numero1 + numero2));

// Tipos de datos : Primitivos
// 1. String
const nombreUsuario = "Santiago Lacki"
const producto = 'Celular'
const tarea = `Realizar el TP-1`

console.log(nombreUsuario)
console.log(producto)
console.log(tarea)

// 2. Number
const edad = 25
const precioNuevo = 20.5
const negativo = -40.3

console.log(edad)
console.log(precioNuevo)
console.log(negativo)

// 3. Booleanos
const estaLogueado = true
const estaDeslogueado = false

console.log(estaLogueado)
console.log(estaDeslogueado)

// 4. Null : Valor literalmente vacio
let vacio = null;

console.log(vacio)

// 5. Undefined : Valor indefinido
let sinValor = undefined;

console.log(sinValor)

// Tipos de Referenciales
// objeto con notacion literal (objeto)
const funko = {
  nombre: 'Funko Capitan America',
  precio: 30,
  codigo: 'CAP-001'
}

console.log(funko)

// 6. Arrays
const productos = ["celular", "tablet", "notebook"]

console.log(productos)