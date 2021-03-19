//Funciones normales
function suma(a,b){
    console.log(a+b);
}

suma(5,6);

//Declaracion de función de tipo expresión
let x = function (a,b){return a + b};

let resultado = x(1,2);
console.log(resultado);

//Funciones Self Invoking
(function (a,b){
    console.log("Funcion Self Invoking, a+b=" + (a+b));
})(3,5); //Estas funciones no se pueden reutilizar