/*
  Creando algunos objetos literales y constructores
*/

//Creando un objeto literal del candidato

const candidato = {
  nombre: 'Victor',
  edad: 30,
  ciudad: 'Morelia'
}


console.log(candidato)

//Creando un objeto constructor

function Candidato(nombre, edad, ciudad) {
  this.nombre = nombre
  this.edad = edad
  this.ciudad = ciudad
}

const victor = new Candidato('Victor', 30, 'Morelia')

console.log(victor)