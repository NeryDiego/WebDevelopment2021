let a = 5;
let valMin = 0, valMax = 4;

// Operador AND
if((a >= valMin) && (a <= valMax)){
    console.log("La variable a se encuentra dentro del limite");
} else {
    console.log("Fuera de rango");
}

let diaSemana = "Viernes";
let diaDescanso = true;

// Operador OR
if((diaSemana == "Domingo") || (diaDescanso == true)){
    console.log("Puede ir al partido");
} else {
    console.log("No puedes ir al partido");
}

// Operador Ternario
let resultado = (1>2) ? "Verdadero" : "Falso";
console.log(resultado);

let numero = 9;
resultado = (numero % 2 == 0) ? "Numero Par" : "Numero Impar";
console.log(resultado);

