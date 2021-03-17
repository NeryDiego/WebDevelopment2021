
let array = [1,2,3,4];
for(let count = 0; count <= 3; count++){
    if( array[count] % 2 == 0){
        console.log("Valor par: " + array[count]);
        break; //Una vez que encontremos el primer numero par, esto terminará el ciclo for
    }
}

console.log("Fin ciclo For");

//Las etiquetas no son recomendadas de usar
inicio:
for(let i = 0; i <= 10; i++){
    if(i % 2 !== 0){
        continue inicio; //Se va a ejecutar la siguiente iteración del ciclo for
        console.log("Esto no se ejecuta");
    } else {
        console.log("Variable par: " + i);
    }
}