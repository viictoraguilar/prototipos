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

Candidato.prototype.mostrarInformacionCandidato = function () {
  return `Nombre:  ${this.nombre}, Edad: ${this.edad}, Ciudad: ${this.ciudad}, Nivel: ${this.tipoCandidato()}`
}

Candidato.prototype.presentaExamentecnico = function(examen) {
  this.nivel -= examen
}

//instanciando un candidato nuevo
const victor = new Candidato('Victor', 30, 'Morelia', 8)
console.log(victor.tipoCandidato())
console.log(victor.mostrarInformacionCandidato())
victor.presentaExamentecnico(3)
console.log(victor.mostrarInformacionCandidato())
victor.presentaExamentecnico(4)
console.log(victor.mostrarInformacionCandidato())
console.log(victor)
