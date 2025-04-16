// Bucles = Estructuras de repeticion
// while - do while - for


/* 

  Mientras se cumple la condicion logica

  while(condicion logica) {
    (Lineas de codigo que quiero repetir)
    Agregar un linea que haga que la condicion logica se deje de cumplir
  }

*/

let renglon = 1;

while (renglon <= 50) {
  document.writeln(`<p> Renglon numero ${renglon} </p>`);
  renglon = renglon + 1;
}