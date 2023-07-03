"use strict";
class Estudiante extends Persona {
    constructor(nombre, edad, sexo, calificacionActual) {
        super(nombre, edad, sexo);
        this.calificacionActual = calificacionActual;
    }
    getCalificacionActual() {
        return this.calificacionActual;
    }
    hacerNovillos() {
        return Math.random() < 0.5;
    }
}
