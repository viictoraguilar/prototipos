//Un ejemplo de funcionalidad sin usar prototipos casos en los que se hacen demasiados ajustes y se suelen confundir funciones

//Mostrando candidatos

function Candidato(nombre, edad, ciudad) {
  this.nombre = nombre
  this.edad = edad
  this.ciudad =  ciudad
}

const victor = new Candidato('Victor', 30, 'Morelia')

function mostrarInformacionCandidato(candidato) {
  const {nombre, edad, ciudad} = candidato
  return `El candidato se llama ${nombre} tiene ${edad} años y es de ${ciudad}`
}

console.log(mostrarInformacionCandidato(victor))

//Mostrando a los que ya son empleados

function mostrarInformacionEmpleado(empleado) {
  const {nombre, edad, ciudad, antiguedad} = empleado
  return `El empleado se llama ${nombre} tiene ${edad} años, es de ${ciudad} y tiene una antigüedad de ${antiguedad} años`
}

function Empleado(nombre, edad, ciudad, antiguedad) {
  this.nombre = nombre
  this.edad = edad
  this.ciudad = ciudad
  this.antiguedad = antiguedad
}

const noe = new Empleado('Noe', 31, 'México', 3)
console.log(mostrarInformacionEmpleado(noe))
const luis = new Empleado('Luis', 35, 'Cuernavaca', 4)
console.log(mostrarInformacionEmpleado(luis))
