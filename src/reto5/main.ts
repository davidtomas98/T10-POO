// Crear película
const pelicula = new Pelicula('Título de la Película', 120, 16, 'Director de la Película');

// Crear cine
const cine = new Cine(pelicula, 10);

// Crear espectadores
const espectadores: Espectador[] = [
    new Espectador('Espectador 1', 20, 15),
    new Espectador('Espectador 2', 25, 10),
    new Espectador('Espectador 3', 18, 12),
    new Espectador('Espectador 4', 30, 8),
    new Espectador('Espectador 5', 16, 9),
    new Espectador('Espectador 6', 22, 11),
];

// Reproducir la película en el cine
cine.reproducirPelicula();

// Sentar a los espectadores en el cine
for (const espectador of espectadores) {
    cine.sentarEspectador(espectador);
}