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
}

let hijo = new Persona("Juan", "Perez", "email@gmail.com");
console.log(hijo);

let padre = new Persona("Felipe", "Martinez", "email2@email.com");
console.log(padre);