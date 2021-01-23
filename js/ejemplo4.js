//Creando prototipos para la lógica de empleados y candidatos

function Candidato(nombre, edad, ciudad, nivel) {
  this.nombre = nombre
  this.edad = edad
  this.ciudad =  ciudad
  this.nivel = nivel
}

Candidato.prototype.tipoCandidato = function() {
  
  let tipo

  if(this.nivel >= 8 && this.nivel <= 10) {
    tipo = 'SR'
  } else if(this.nivel >= 4 && this.nivel <= 7) {
    tipo = 'SSR'
  } else {
    tipo = 'JR'
  }

  return tipo
}

Candidato.prototype.mostrarInformacion = function () {
  return `Nombre:  ${this.nombre}, Edad: ${this.edad}, Ciudad: ${this.ciudad}, Nivel: ${this.tipoCandidato()}`
}

Candidato.prototype.presentaExamentecnico = function(examen) {
  this.nivel -= examen
}

//Creando un empleado

function Empleado(nombre, edad, ciudad, nivel, antiguedad) {
  Candidato.call(this, nombre, edad, ciudad, nivel)
  this.antiguedad = antiguedad
}

//Pasando prototipo de candidato a empleado para heredar funciones
Empleado.prototype = Object.create(Candidato.prototype)

Empleado.prototype.constructor = Candidato

//Instanciando un empleado
const luis = new Empleado('Luis', 34, 'Cuernavaca', 9, 3)
console.log(luis)
console.log(luis.mostrarInformacion())

Empleado.prototype.mostrarAntiguedad = function() {
  return `La antigüedad de este empleado es de ${this.antiguedad} años`
}

console.log(luis.mostrarAntiguedad())
