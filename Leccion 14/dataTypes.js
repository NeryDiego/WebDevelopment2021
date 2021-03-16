var stringVar = "Diego";
console.log(stringVar);

stringVar = 200;
console.log(typeof(stringVar));

var intVar = 10;
console.log(intVar);

//Tipo de dato object
var objeto = {
    nombre : "Diego",
    edad: "24",
    trabajo: "IT Services"
};

console.log(objeto);
console.log(objeto.edad);
console.log(typeof(objeto));

//Tipo de dato boolean 
var flag = true;
console.log(flag + " Type of:" + typeof(flag));

//Tipo de dato funcion
function suma(a, b){
    return a+b;
}

console.log(suma(5,30) + " Type of: " + typeof(suma))

//Tipo de dato Symbol
var symbol = Symbol("mi simbolo"); //Valor unico de una variable
console.log(typeof(symbol))

//Tipo clase es una funcion
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//Tipo undefined
var x;
console.log(typeof(x));

//Null = ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

//Arrays en JS son objetos
var autos = ['Mazda', 'Honda', 'BMW'];
console.log(autos[2]);
console.log(typeof autos);