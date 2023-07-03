// Crear arrays de Series y Videojuegos
const series = [
    new Serie("Stranger Things", "Los Hermanos Duffer"),
    new Serie("Game of Thrones", "David Benioff, D.B. Weiss"),
    new Serie("Breaking Bad", "Vince Gilligan"),
    new Serie("Friends", "David Crane, Marta Kauffman"),
    new Serie("The Office", "Greg Daniels")
  ];
  
  const videojuegos = [
    new Videojuego("The Legend of Zelda: Breath of the Wild", 59.99, "Nintendo"),
    new Videojuego("Red Dead Redemption 2", 59.99, "Rockstar Games"),
    new Videojuego("The Witcher 3: Wild Hunt", 39.99, "CD Projekt"),
    new Videojuego("Grand Theft Auto V", 29.99, "Rockstar Games"),
    new Videojuego("Minecraft", 26.95, "Mojang Studios")
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
let videojuegoMasHoras: Videojuego = videojuegos[0];

for (const videojuego of videojuegos) {
    if (videojuego.getHorasEstimadas() > videojuegoMasHoras.getHorasEstimadas()) {
        videojuegoMasHoras = videojuego;
    }
}

console.log("Videojuego con más horas estimadas:");
console.log(videojuegoMasHoras.toString());

// Encontrar Serie con más temporadas
let serieMasTemporadas: Serie = series[0];

for (const serie of series) {
    if (serie.getNumeroTemporadas() > serieMasTemporadas.getNumeroTemporadas()) {
        serieMasTemporadas = serie;
    }
}

console.log("Serie con más temporadas:");
console.log(serieMasTemporadas.toString());

// ...
