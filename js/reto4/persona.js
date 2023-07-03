"use strict";
class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }
    getNombre() {
        return this.nombre;
    }
    getEdad() {
        return this.edad;
    }
    getSexo() {
        return this.sexo;
    }
}
