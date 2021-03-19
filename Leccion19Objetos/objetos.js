// Forma común de definir objetos
let persona = {
    nombre : 'Diego',
    apellido : "Martinez",
    edad : 24,
    nombreCompleto : function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombreCompleto());

// Definir objeto de otra manera
let persona2 = new Object();
persona2.nombre = "Juan";
persona2.apellido = "Perez";
persona2.telefono = "No";

console.log(persona2);
console.log(persona2 ['apellido']);

for (const key in persona2) {
    if (Object.hasOwnProperty.call(persona2, key)) {
        console.log(persona2[key]);
        
    }
}