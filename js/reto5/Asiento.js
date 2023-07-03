"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Asiento {
    constructor(fila, columna) {
        this.fila = fila;
        this.columna = columna;
        this.ocupado = false;
    }
    getFila() {
        return this.fila;
    }
    getColumna() {
        return this.columna;
    }
    estaOcupado() {
        return this.ocupado;
    }
    ocupar() {
        this.ocupado = true;
    }
}
exports.default = Asiento;
