"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Asiento_1 = __importDefault(require("./Asiento"));
class Cine {
    constructor(pelicula, precioEntrada) {
        this.pelicula = pelicula;
        this.precioEntrada = precioEntrada;
        this.asientos = [];
        // Crear los asientos en el cine
        for (let fila = 8; fila >= 1; fila--) {
            const filaAsientos = [];
            for (let columna = 'A'; columna <= 'I'; columna = String.fromCharCode(columna.charCodeAt(0) + 1)) {
                filaAsientos.push(new Asiento_1.default(fila, columna));
            }
            this.asientos.push(filaAsientos);
        }
    }
    reproducirPelicula() {
        console.log(`Reproduciendo la película: ${this.pelicula.getTitulo()}`);
    }
    sentarEspectador(espectador) {
        // Verificar si el espectador cumple los requisitos para ver la película
        if (espectador.getEdad() < this.pelicula.getEdadMinima()) {
            console.log(`${espectador.getNombre()} no cumple con la edad mínima para ver la película.`);
            return;
        }
        // Buscar un asiento libre para el espectador
        let asientoEncontrado = false;
        for (let fila = 0; fila < this.asientos.length; fila++) {
            for (let columna = 0; columna < this.asientos[fila].length; columna++) {
                const asiento = this.asientos[fila][columna];
                if (!asiento.estaOcupado()) {
                    asiento.ocupar();
                    asientoEncontrado = true;
                    console.log(`${espectador.getNombre()} se ha sentado en el asiento ${asiento.getColumna()}${asiento.getFila()}.`);
                    break;
                }
            }
            if (asientoEncontrado) {
                break;
            }
        }
        // Si no se encontró un asiento libre, informar al espectador
        if (!asientoEncontrado) {
            console.log(`${espectador.getNombre()} no pudo encontrar un asiento libre.`);
        }
    }
}
exports.default = Cine;
