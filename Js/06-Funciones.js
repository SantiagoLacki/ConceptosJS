
// - Sintaxis: Funcion tradicional.
// - Sintaxis: Expresion de funcion.
// - Sintaxis: Arrow function.

// - Funciones sin parametros.

// Sintaxis forma: TRADICIONAL.
// function saludar() {
//   // (Todas las lineas de codigo que quiero que haga la funcion)
//   document.writeln("<p>Hola mundo.</p>")
// }

// Sintaxis forma: EXPRESION DE FUNCION.
const saludar = function () {
  document.writeln(`<p>Hola mundo</p>`)
}

// - Funciones con parametros
function sumar(numero1, numero2) {
  const resultado = numero1 + numero2
  document.writeln(`<p>Resultado de la suma: ${resultado}`);
}


// - Funciones que retornan un valor

// function multiplicar (numero1, numero2) {
//   const resultado = numero1 * numero2
//   return resultado
// }

// Sintaxis forma: ARROW FUNCTION
// const multiplicar = (numero1,numero2) => {
//   const resultado = numero1 * numero2
//   console.log(resultado)
//   return resultado
// }

const multiplicar = (numero1,numero2) => numero1 * numero2

// LLamar a una funcion
saludar();

const num1 = parseInt(prompt("Ingrese un numero: "))
const num2 = parseInt(prompt("Ingrese un segundo numero: "))

sumar(num1,num2)
sumar(num1,10)

//console.log(resultado) // Error en tiempo de ejecucion pero no en el codigo.
// la variable existe dentro de la funcion pero no puedo solicitarla fuera de ella.

const resultado = multiplicar(num1,num2)
document.writeln("<br> El resultado de la multiplicacion es: " + resultado)


