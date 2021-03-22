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

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

}

/*
    Clase hijo
*/
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); //Llamar al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
}

let persona1 = new Persona("Juan", "Lara");
console.log(persona1);

let persona2 = new Persona("Diego", "Nery");
persona2.nombre = "Pablo";
console.log(persona2);

let empleado = new Empleado("Emmanuel", "Ruiz","Ingeniero");
console.log(empleado);
