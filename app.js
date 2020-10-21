//Función constructora Paciente

function Consultorio (name, patient){
this.name = name,
this.patients = patient || []
}

Consultorio.prototype.setName = function(name){
  this.name = name
}

Consultorio.prototype.getName = function(){
  return this.name
}

//Función constructora Paciente

function Patient(name, age, rut, diagnostic){
this.name =name 
this.age = age 
this.rut = rut 
this.diagnostic = diagnostic 
}

//name
Patient.prototype.setName = function(name){
  this.name = name
}

Patient.prototype.getName = function(){
  return this.name
}

//age
Patient.prototype.setAge = function(age){
  this.age = age
}

Patient.prototype.getAge = function(){
  return this.age
}

//rut
Patient.prototype.setRut = function(rut){
  this.rut = rut
}

Patient.prototype.getRut = function(){
  return this.rut
}

//diagnostic
Patient.prototype.setDiagnostic = function(diagnostic){
  this.diagnostic = diagnostic
}

Patient.prototype.getDiagnostic = function(){
  return this.diagnostic
}

//


var patient1 = new Patient('Paulo',25,186362969,'pcr negativo'),

var patient2 = new Patient('maria',25,189774338,'pcr negativo'),

var patient3 = new Patient('isabel',25,259998887,'pcr negativo')

var consultorio = new Consultorio('Nr.1',[patient1, patient2, patient3])
console.log(consultorio)

consultorio.setName("Nr. 2")
console.log(consultorio.getName())

patient1.setName("Carlos")
console.log(patient1.getName())

patient1.setAge(50)
console.log(patient1.getAge())

patient1.setRut(156754324)
console.log(patient1.getRut())

patient1.setDiagnostic("Sano")
console.log(patient1.getDiagnostic())


console.log(consultorio.getPatients())

var patient4 = new Patient('Seba', 36, 108546985, 'alergía')


console.log(consultorio.buscarPatient('Seba'))


//Segunda parte, como mostrar lista ejemplo

function Patient(name, age, desease){
  this.name = name;
  this.age = age;
  this.desease = desease
}
Patient.prototype.sayHi = function(){
  console.log(`Hola soy ${this.name} y tengo ${this.desease}`)
}
function Clinic(name, patients){
  this.name = name;
  this.patients = patients || []
}
Clinic.prototype.addPatient = function(patient){
  this.patients.push(patient)
}
Clinic.prototype.listPatients = function(){
	for(patient of this.patients){
    console.log(patient.sayHi())
  }  
}
var p1 = new Patient('seba', NaN, 'Crazy as hell')
var p2 = new Patient('cris', NaN, 'Too Normal')
var clinic = new Clinic('El Peral')
clinic.addPatient(p1)
clinic.addPatient(p2)
clinic.listPatients()













