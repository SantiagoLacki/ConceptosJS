
// persona: nombre, apellido, dni, mail, edad, estado
// alumnos: legajo, curso [], asistencia

class Personas {
  // Propiedades y metodos
  constructor (nombreParam,apellido,dni,email,edad,estado) {
    // nombreObjeto.propiedad
    // clave: this.clave = valor:(parametro)
    this.nombre = nombreParam
    this.apellido = apellido
    this.dni = dni
    this.email = email
    this.edad = edad
    // propiedades por defecto (tienen un valor por defecto que no viene por parametro)
    this.estado = true
  }
  // get y set

  // metodos
}

// nombreObjeto.propiedad
// Cuando utilizamos a la clase: crear un objeto o instanciar

const santiago = new Personas("Santiago", "Lacki", "12345678", "santiago123@gmail.com", 25)
const ignacio = new Personas("ignacio", "Lacki", "98765432", "ignacio321@gmail.com", 24)
console.log(santiago);
console.log(ignacio);