"use strict";
// Crear arrays de Series y Videojuegos
const series = [
    new Serie("Serie 1", "Creador 1"),
    new Serie("Serie 2", "Creador 2"),
    new Serie("Serie 3", "Creador 3"),
    new Serie("Serie 4", "Creador 4"),
    new Serie("Serie 5", "Creador 5")
];
const videojuegos = [
    new Videojuego("Videojuego 1", 15, "Compañía 1"),
    new Videojuego("Videojuego 2", 20, "Compañía 2"),
    new Videojuego("Videojuego 3", 10, "Compañía 3"),
    new Videojuego("Videojuego 4", 12, "Compañía 4"),
    new Videojuego("Videojuego 5", 8, "Compañía 5")
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
