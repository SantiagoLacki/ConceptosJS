
// persona: nombre, apellido, dni, mail, edad, estado
// alumnos: legajo, curso [], asistencia

class Personas {
  // Propiedades privadas
  #email; #nombre // ; #estado (si quiero agregar mas propiedades privadas)
  // Propiedades y metodos
  constructor (nombreParam,apellido,dni,email,edad,estado) {
    // nombreObjeto.propiedad
    // clave: this.clave = valor:(parametro)
    this.#nombre = nombreParam
    this.apellido = apellido
    this.dni = dni
    this.#email = email
    this.edad = edad
    // propiedades por defecto (tienen un valor por defecto que no viene por parametro)
    this.estado = true
  }

  // Propiedades computadas
  // Get y Set
  // Get: devuelve un dato
  get getEmail () {
    return this.#email
  }
  // Set: modificar un dato (siempre lleva un parametro (valor por el que voy a modificar))
  set setEmail(nuevoEmail){
    this.#email = nuevoEmail
  }

  get getNombre () {
    return this.#nombre
  }
  set setNombre (nuevoNombre) {
    return this.nuevoNombre
  }

  // Metodos
  mostrarDatos() {
    document.writeln(`<ul>
      <li>Nombre: ${this.nombre} </li>
      <li>Apellido: ${this.apellido} </li>
      <li>DNI: ${this.dni} </li>
      <li>Email: ${this.#email} </li>
      <li>Edad: ${this.edad} </li>
    </ul>`)
  }
}

class Alumno extends Personas {
  constructor(nombreParam,apellido,dni,email,edad,legajo,curso,asistencia) {
    
  }
  
  // get y set
  
  // metodos

}

// nombreObjeto.propiedad
// Cuando utilizamos a la clase: crear un objeto o instanciar

const santiago = new Personas("Santiago", "Lacki", "12345678", "santiago123@gmail.com", 25)
const ignacio = new Personas("ignacio", "Lacki", "98765432", "ignacio321@gmail.com", 24)
console.log(santiago.getEmail);
console.log(ignacio);

santiago.mostrarDatos();
ignacio.mostrarDatos();


// No se puede manipular desde fuera del objeto por el encapsulamiento
// ignacio.#email = "ignacio00@gmail.com"
// ignacio.mostrarDatos();

// Modificando datos con SET por el encapsulamiento.
santiago.setEmail = "santiago222@gmail.com" 
santiago.mostrarDatos();

