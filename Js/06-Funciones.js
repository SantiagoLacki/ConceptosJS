
// - Sintaxis: Funcion tradicional
// - Sintaxis: Expresion de funcion
// - Sintaxis: Arrow function

// - Funciones sin parametros

function saludar() {
  // (Todas las lineas de codigo que quiero que haga la funcion)
  document.writeln("<p>Hola mundo.</p>")
}

// - Funciones con parametros

function sumar(numero1, numero2) {
  const resultado = numero1 + numero2
  document.writeln(`<p>Resultado de la suma: ${resultado}`);
}


// - Funciones que retornan un valor

// LLamar a una funcion
saludar();

const num1 = parseInt(prompt("Ingrese un numero: "))
const num2 = parseInt(prompt("Ingrese un segundo numero: "))

sumar(num1,num2)
sumar(num1,10)