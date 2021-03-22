/*
    Las clases no tienen el concepto de Hoisting, por lo que,
    se deben declarar antes de poder usarlas, a diferencia de
    una función.
*/

//let persona3 = new Persona("Sara", "Connor");

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }    

}

let persona1 = new Persona("Juan", "Lara");
console.log(persona1);

let persona2 = new Persona("Diego", "Nery");
persona2.nombre = "Pablo";
console.log(persona2);

