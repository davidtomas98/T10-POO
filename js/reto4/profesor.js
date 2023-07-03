"use strict";
class Profesor extends Persona {
    constructor(nombre, edad, sexo, materia) {
        super(nombre, edad, sexo);
        this.materia = materia;
    }
    getMateria() {
        return this.materia;
    }
    estaDisponible() {
        return Math.random() > 0.2;
    }
}
