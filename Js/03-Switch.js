/* 

opcion = "sabado"
switch (opcion){
  case "lunes":
    (Todo el codigo que se ejecuta si la opcion es lunes)
    breack;
  case "martes":
    (Todo el codigo que se ejecuta si la opcion es martes)
    breack;
  case "miercoles":
    (Todo el codigo que se ejecuta si la opcion es miercoles)
    breack;
  default:
    (Codigo que se ejecuta si no se ingreso ninguna de las opciones anteriores)
}

*/

// Ejercicio cajero automatico
// pedir al usuario que ingrese una opcion: 
// 1- consultar el saldo, 2- depositar dinero,
// 3- extraer dinero, 4- salir.

const opcion = parseInt(prompt("Seleccione una opcion: 1- consultar el saldo, 2- depositar dinero, 3- extraer dinero, 4- salir."))

let saldo = 10000

switch (opcion){
  case 1:
    document.writeln("El saldo es: $", saldo);
    breack;
  
    case 2:
    // Mostrar un mensaje para ingresar el monto a depositar
    const deposito = Number(prompt("Ingrese el monto a depositar: "));
    // Actualizar el saldo
    saldo = saldo + deposito; // saldo += deposito;
    // Mostrar mensaje de operacion realizado con exito y mostrar el saldo actualizado
    document.writeln("La operacion fue realizada con exito!<br>");
    document.writeln("Depositaste $", deposito, ". Tu saldo actual es: $", saldo);
  
    case 3:
    // Mostrar un mensaje para ingresar el monto a extraer
    const extraccion = Number(prompt('Ingrese el monto a extraer: '));
    // Hacer la extraccion, mostrar y actualizar el saldo
    if (extraccion <= saldo) {
      saldo = saldo - extraccion
      document.writeln("Se retiraron: $", extraccion, ". Tu saldo actual es: $", saldo);
    }
    else {
      // Validar que no se pueda extraer mas de lo que hay en la cuenta
      document.writeln("Saldo insuficiente.");
    }
    breack;
  
    case 4:
    document.writeln("Cerrando sesion...")
    break;
  
    default:
      document.writeln("Porfavor seleccione una opcion valida.");
  }
