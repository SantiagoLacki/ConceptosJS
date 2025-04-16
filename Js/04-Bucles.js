// Bucles = Estructuras de repeticion
// while - do while - for

/* 

  -- Mientras se cumple la condicion logica --

  - WHILE -

  while(condicion logica) {
    (Lineas de codigo que quiero repetir)
    Agregar un linea que haga que la condicion logica se deje de cumplir
  }

*/

let renglon = 1;

while (renglon <= 10) {
  document.writeln(`<p> Renglon numero ${renglon} </p>`);
  renglon = renglon + 1;
}

/* 

  -- Hacer mientras se cumple la condicion logica --

  - DO WHILE -

  do {
    (Lineas de codigo que quiero repetir)
    Agregar una linea que haga que la condicion logica se deje de cumplir
  }
  while (Condicion logica)

*/

let linea = 1;

do {
  document.writeln(`<p> Linea numero: ${linea} </p>`);
  linea = linea + 1
}
while (linea<=10)