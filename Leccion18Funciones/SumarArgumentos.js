let resultado = sumarTodo(5,4,13,10,9);

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma = suma + arguments[i];
    }

    return suma;
}

console.log(resultado);

// Paso por valor
let x = 10; //Valor primitivo

function cambiarValor(a){
    a = 20;
}

cambiarValor(x);
console.log(x);

// Paso por referencia
const persona = {
    nombre : "Diego",
    apellido : "Martinez",
    edad : 24
}

function cambiarValorObjecto(p1){
    p1.nombre = 'Carlos';
}

cambiarValorObjecto(persona);
console.log(persona);