//Forma antigua de declarar arreglos
let autos = new Array('BMW', 'Honda', 'Mazda');

//Forma actual
const array = ['BMW', 'Honda', 'Mazda'];
console.log(array);

for(let count = 0; count < autos.length; count++){
    console.log(array[count]);
}

//Modificar elementos de un array
array[0] = 'Fit2015';
console.log(array)

array.push('Civic');
console.log(array);

//Preguntar si estamos trabajando con un arreglo
console.log(typeof array); //Esto regresa un objeto, no un arreglo
console.log(Array.isArray(array)); //Con esto podemos saber si es un arreglo
console.log(array instanceof Array); //Otra forma de preguntar si estamos trabajando con un arreglo