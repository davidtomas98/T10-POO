"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serie_1 = __importDefault(require("./serie"));
const Videojuego_1 = __importDefault(require("./Videojuego"));
// Crear arrays de Series y Videojuegos
const series = [
    new serie_1.default("Serie 1", "Creador 1"),
    new serie_1.default("Serie 2", "Creador 2"),
    new serie_1.default("Serie 3", "Creador 3"),
    new serie_1.default("Serie 4", "Creador 4"),
    new serie_1.default("Serie 5", "Creador 5")
];
const videojuegos = [
    new Videojuego_1.default("Videojuego 1", 15, "Compañía 1"),
    new Videojuego_1.default("Videojuego 2", 20, "Compañía 2"),
    new Videojuego_1.default("Videojuego 3", 10, "Compañía 3"),
    new Videojuego_1.default("Videojuego 4", 12, "Compañía 4"),
    new Videojuego_1.default("Videojuego 5", 8, "Compañía 5")
];
// Resto del código principal
// Entregar algunos Videojuegos y Series
series[1].entregar();
series[3].entregar();
videojuegos[0].entregar();
videojuegos[4].entregar();
// Contar Series y Videojuegos entregados
let seriesEntregadas = 0;
let videojuegosEntregados = 0;
for (const serie of series) {
    if (serie.isEntregado()) {
        seriesEntregadas++;
    }
}
for (const videojuego of videojuegos) {
    if (videojuego.isEntregado()) {
        videojuegosEntregados++;
    }
}
console.log(`Series entregadas: ${seriesEntregadas}`);
console.log(`Videojuegos entregados: ${videojuegosEntregados}`);
// Encontrar Videojuego con más horas estimadas
let videojuegoMasHoras = videojuegos[0];
for (const videojuego of videojuegos) {
    if (videojuego.getHorasEstimadas() > videojuegoMasHoras.getHorasEstimadas()) {
        videojuegoMasHoras = videojuego;
    }
}
console.log("Videojuego con más horas estimadas:");
console.log(videojuegoMasHoras.toString());
// Encontrar Serie con más temporadas
let serieMasTemporadas = series[0];
for (const serie of series) {
    if (serie.getNumeroTemporadas() > serieMasTemporadas.getNumeroTemporadas()) {
        serieMasTemporadas = serie;
    }
}
console.log("Serie con más temporadas:");
console.log(serieMasTemporadas.toString());
// ...
