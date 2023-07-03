"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pelicula_1 = __importDefault(require("./Pelicula"));
const Espectador_1 = __importDefault(require("./Espectador"));
const Cine_1 = __importDefault(require("./Cine"));
// Crear película
const pelicula = new Pelicula_1.default('Título de la Película', 120, 16, 'Director de la Película');
// Crear cine
const cine = new Cine_1.default(pelicula, 10);
// Crear espectadores
const espectadores = [
    new Espectador_1.default('Espectador 1', 20, 15),
    new Espectador_1.default('Espectador 2', 25, 10),
    new Espectador_1.default('Espectador 3', 18, 12),
    new Espectador_1.default('Espectador 4', 30, 8),
    new Espectador_1.default('Espectador 5', 16, 9),
    new Espectador_1.default('Espectador 6', 22, 11),
];
// Reproducir la película en el cine
cine.reproducirPelicula();
// Sentar a los espectadores en el cine
for (const espectador of espectadores) {
    cine.sentarEspectador(espectador);
}
