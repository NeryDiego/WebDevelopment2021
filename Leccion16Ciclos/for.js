
let array = [1,2,3,4];
for(let count = 0; count <= 3; count++){
    if( array[count] % 2 == 0){
        console.log("Valor par: " + array[count]);
        break; //Una vez que encontremos el primer numero par, esto terminará el ciclo for
    }
}

console.log("Fin ciclo For");