
// Programacion Orientada a Objetos

// Notacion literal: Se usa cuando creo un 
// solo objeto.

const usuario = {
  // Propiedades o atributos => clave: valor (Todo lo que puede describir al objeto)
  // nombreUsuario, nombre, email, dni, id, github, telefono, fotoPerfil, estado
  nombreUsuario: "Santiago01",
  nombre: "Santiago",
  apellido: "Lacki",
  email: "santi123@gmail.com",
  dni: "12345678",
  id: "01",
  github: "SantiagoLacki",
  telefono: "123456789",
  estado: "true",
  // cursos: [fullStack]

  // Metodos (Que acciones puedo realizar con los datos del objeto)
  nombreCompleto: function () {
    document.writeln(`Hola soy...`)
  },
  cambiarEstado: () => {
    document.writeln(`Aqui tengo que cambiar el estado...`)
  }
}

// Mostrar un objeto:
console.log(usuario);
document.writeln(usuario, "<br>");

// Mostrar propiedades de un objeto
document.writeln(usuario.nombreUsuario);
document.writeln(`<p>El dni del usuario es: ${usuario.dni}</p>`);
document.writeln(`<p>El email del usuario es: ${usuario[`email`]}</p>`);
document.writeln(`<p>El email del usuario es: ${usuario[`emails`]}</p>`);

// Modificar una propiedad de un objeto
usuario.nombreUsuario = "Santiago02"
document.writeln(`<p>El usuario nuevo es: ${usuario.nombreUsuario}</p>`);

// Agregar una propiedad al objeto
usuario.github = "https://github.com/"
document.writeln(`<p>El link de GitHub del usuario es: ${usuario.github}</p>`);

// Ejecutar un metodo
// usuario.nombreCompleto()
// usuario.cambiarEstado()

// Clases: