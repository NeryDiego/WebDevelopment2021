let a = 3, b = 2;
let z = a + b;
console.log("Resultado de la suma: " + (z));

z = a - b;
console.log("Resultado de la resta: " + (z));

z = a * b;
console.log("Resultado de la multiplicación: " + (z));

z = a / b;
console.log("Resultado de la division: " + (z));

z = a % b;
console.log("Resultado del residuo: " + (z));

z = a ** b;
console.log("Resultado de la potencia: " + (z));

//Operadores de incremento y decremento
//Pre-incremento (el operador ++ antes de la variable)
//Primero se incrementa "a" y luego se iguala a "z"
z = ++a;
console.log(a);
console.log(z);

//Post-incremento (el operador ++ después de la variable)
//Primero se asigna el valor de b a z y luego se incrementa la variable b
z = b++;
console.log(b);
console.log(z);

//Pre-decremento
z = --a;
console.log(a);
console.log(z);
//Post-decremento
z = b--;
console.log(b);
console.log(z);

/*
 Operadores de asignación
*/
let var1 = 2;
var1 += 3;
console.log(var1);

var1 -= 2;
console.log(var1);

var1 *= 2;
console.log(var1);

var1 %= 4;
console.log(var1);

/*
 Operadores de comparación
*/
let var2 = 3;
let string1 = "3";
let string2 = "Hola";

// == revisa el valor sin importar el tipo
let var3 = var2 == string1; 
console.log(var3);

//revisa los valores pero también los tipos
var3 = var2 === string1;
console.log(var3);

/*
 Operador distinto A
*/
var3 = var1 != var2;
console.log(var3);

var3 = 3 !== "3";
console.log(var3);