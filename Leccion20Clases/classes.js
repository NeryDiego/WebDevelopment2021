/*
    Las clases no tienen el concepto de Hoisting, por lo que,
    se deben declarar antes de poder usarlas, a diferencia de
    una función.
*/

//let persona3 = new Persona("Sara", "Connor");

class Persona{
    /*
        Atributos estáticos, pertenecen a la clase y no pertenecen a ningún objeto
    */
    static contadorObjetoPersona = 0; //Atributo de nuestra clase
    
    email = 'Valor default'; //Atributo de nuestros objetos (No estatico)

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetoPersona++;
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

    //Nuevo método
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    //Override toString() de la clase Padre (Object)
    toString(){
        //Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padres
        //o de tipo hijo
        return this.nombreCompleto();
    }

    //Método estatico, se asocia unicamente a esta clase (NO al objeto)
    static saludar(){
        console.log("Saludos desde método static");
    }

    static saludar2(persona){
        console.log(persona.nombre);
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

    /*
        Sobreescritura/Override (métodos) 
    */
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
    
}

let persona1 = new Persona("Juan", "Lara");
console.log(persona1);

let persona2 = new Persona("Diego", "Nery");
persona2.nombre = "Pablo";
console.log(persona2.toString());

//persona1.saludar; no es posible llamar un método static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

let empleado = new Empleado("Emmanuel", "Ruiz","Ingeniero");
console.log(empleado);
console.log(empleado.nombre);
console.log(empleado.nombreCompleto());

console.log(empleado.toString());

console.log(empleado);

/*
    Las clases hijas heredan los atributos estáticos
*/
console.log(Persona.contadorObjetoPersona);

console.log(Empleado.contadorObjetoPersona);
