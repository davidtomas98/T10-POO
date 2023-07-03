"use strict";
// Crear película
const pelicula = new Pelicula('Titanic', 195, 13, 'James Cameron');
// Crear cine
const cine = new Cine(pelicula, 10);
// Crear espectadores
const espectadores = [
    new Espectador('Carlos Martínez', 28, 18),
    new Espectador('María López', 32, 16),
    new Espectador('David García', 19, 14),
    new Espectador('Laura Rodríguez', 35, 12),
    new Espectador('Alejandro Fernández', 16, 10),
    new Espectador('Ana González', 24, 15),
];
// Reproducir la película en el cine
cine.reproducirPelicula();
// Sentar a los espectadores en el cine
for (const espectador of espectadores) {
    cine.sentarEspectador(espectador);
}
