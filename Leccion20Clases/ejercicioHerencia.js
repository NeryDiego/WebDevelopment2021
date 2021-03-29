/*
    Clase Padre
*/
class Persona{

    static contadorPersonas = 0;
    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }

    get getIdPersona(){
        return this._idPersona;
    }

    get getNombre(){
        return this._nombre;
    }

    set setNombre(nombre){
        this._nombre = nombre; 
    }

    get getApellido(){
        return this._apellido;
    }

    set setApellido(apellido){
        this._apellido = apellido;
    }

    get getEdad(){
        return this._edad;
    }

    set setEdad(edad){
        this._edad = edad;
    }

    toString(id){
        if( isNaN(id) ){
            return this._idPersona + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad;
        } else {
            return id + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad;
        }
        
    }
}

class Empleado extends Persona{

    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleados;
    }

    get getIdEmpleado(){
        return this._idEmpleado;
    }

    get getSueldo(){
        return this._sueldo;
    }

    set setSueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return super.toString(this.getIdEmpleado) + ' $' + this._sueldo;
    }
}

class Cliente extends Persona{

    static contadorCliente = 0;
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._fechaRegistro = new Date(fechaRegistro);
        this._idCliente = ++Cliente.contadorCliente;
    }

    get getIdCliente(){
        return this._idCliente;
    }

    get getFechaRegistro(){
        return this._fechaRegistro;
    }

    set setFechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return super.toString(this.getIdCliente) + ' ' + this._fechaRegistro;
    }
}

/*
    Empleados
*/
let persona1 = new Persona("Cristina", "Cons", 25);
console.log(persona1.toString());

let empleado1 = new Empleado("Juan", "Lara", 24, 5000);
console.log(empleado1.toString());

let empleado2 = new Empleado("Sara", "Connor", 35, 11500);
console.log(empleado2.toString());
/*
    Clientes
*/
let cliente1 = new Cliente("Diego", "Martinez", 24, "2020-03-29");
console.log(cliente1.toString());

