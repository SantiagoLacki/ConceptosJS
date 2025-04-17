
let saldo = 10000

  do {
    const opcion = parseInt(prompt("Seleccione una opcion: 1- consultar el saldo, 2- depositar dinero, 3- extraer dinero, 4- salir."))

    switch (opcion){
      case 1:
        console.log("El saldo es: ",saldo);
        document.writeln("El saldo es: $", saldo);
        break;
      
      case 2:
        // Mostrar un mensaje para ingresar el monto a depositar
        const deposito = Number(prompt("Ingrese el monto a depositar: "));
        // Actualizar el saldo
        saldo = saldo + deposito; // saldo += deposito;
        console.log("El saldo despues del deposito es: ",saldo)
        // Mostrar mensaje de operacion realizado con exito y mostrar el saldo actualizado
        document.writeln("La operacion fue realizada con exito!<br>");
        document.writeln("Depositaste $", deposito, ". Tu saldo actual es: $", saldo);
        break;

        case 3:
        // Mostrar un mensaje para ingresar el monto a extraer
        const extraccion = Number(prompt('Ingrese el monto a extraer: '));
        // Hacer la extraccion, mostrar y actualizar el saldo
        if (extraccion <= saldo) {
          saldo = saldo - extraccion
          console.log("El saldo despues de la extraccion es: ",saldo)
          document.writeln("Se retiraron: $", extraccion, ". Tu saldo actual es: $", saldo);
        }
        else {
          // Validar que no se pueda extraer mas de lo que hay en la cuenta
          document.writeln("Saldo insuficiente.");
        }
        break;
      
        case 4:
        document.writeln("Cerrando sesion...")
        break;
      
        default:
          document.writeln("Porfavor seleccione una opcion valida.");
      }
  } while (confirm("¿Desea realizar otra operacion? "))