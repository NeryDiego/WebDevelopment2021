let miNumeroString = "19";
console.log(typeof miNumeroString);

let edad = Number(miNumeroString);
console.log(typeof edad);

if(edad >= 18){
    console.log("Ya puedes votar");
} else {
    console.log("No puedes votar");
}

let resultado = (edad >= 18) ? "Puede votar" : "Muy joven para votar";
console.log(resultado);

// Valor NaN (Not a Number)
let NaNValue = "18p";
let number = Number(NaNValue);
console.log(number);

if( isNaN(number) ){
    console.log("No es un número");
} else {
    if(number >= 18){
        console.log("Numero");
    } else {
        console.log("NaN");
    }
}