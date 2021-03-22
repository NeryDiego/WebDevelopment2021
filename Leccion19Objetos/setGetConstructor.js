let persona = {
    nombre : 'Diego',
    apellido : "Martinez",
    edad : 24,
    idioma: 'es_mx',
    get lang(){
        return this.idioma.toUpperCase();
    },

    set lang(lang){
        this.idioma = lang.toUpperCase();
    },

    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

// Metodo GET
console.log(persona.nombreCompleto);

// Metodo SET
console.log(persona.lang);
persona.lang = "en";
console.log(persona.lang);

// Funcion constructor de objeto(sin usar clases)
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

let hijo = new Persona("Juan", "Perez", "email@gmail.com");
console.log(hijo.nombreCompleto());

let padre = new Persona("Felipe", "Martinez", "email2@email.com");
console.log(padre);

// Prototype, asigna la propiedad a todos los objetos
Persona.prototype.tel = '33-123-225';
console.log(padre.tel);
console.log(hijo.tel);
hijo.tel = '33147985790';
console.log(hijo);

// Método CALL permite llamar un metodo definido en un objeto desde otro objeto
let persona1 = {
    nombre : "Juan",
    apellido : "Perez",
    nombreCompleto : function(titulo, tel){
        return titulo + ':' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre : "Carlos",
    apellido : "Lara"
}

// Uso de metodo CALL
console.log(persona1.nombreCompleto());

console.log(persona1.nombreCompleto.call(persona2));

// Parar argumentos usando Call
console.log(persona1.nombreCompleto.call(persona2, 'Ing', '123456779'));

// Metodo APPLY tiene una diferencia en comparacion a CALL
console.log(persona1.nombreCompleto('Lic','55664664'));

/*
    Con apply mandamos un arreglo con los argumentos
*/

let arreglo = ['Ing', '123-55-444'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));

/*
 Imprimir
*/

let array = ['Hola', 'Mundo'];
let array2 = ['hola', 'hola'];
console.log(['Hola', 'mundo!']);
console.log(array2);
console.log(array[0]);

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
