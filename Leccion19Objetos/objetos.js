let persona = {
    nombre : 'Diego',
    apellido : "Martinez",
    edad : 24,
    nombreCompleto : function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombreCompleto());