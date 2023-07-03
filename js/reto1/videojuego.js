"use strict";
class Videojuego {
    constructor(titulo, horasEstimadas, compania) {
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas;
        this.entregado = false;
        this.genero = "";
        this.compania = compania;
    }
    // Métodos y propiedades de la clase Videojuego
    getTitulo() {
        return this.titulo;
    }
    getHorasEstimadas() {
        return this.horasEstimadas;
    }
    getEntregado() {
        return this.entregado;
    }
    getGenero() {
        return this.genero;
    }
    getCompania() {
        return this.compania;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setHorasEstimadas(horasEstimadas) {
        this.horasEstimadas = horasEstimadas;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setCompania(compania) {
        this.compania = compania;
    }
    entregar() {
        this.entregado = true;
    }
    devolver() {
        this.entregado = false;
    }
    isEntregado() {
        return this.entregado;
    }
    compareTo(objeto) {
        if (objeto instanceof Videojuego) {
            const videojuego = objeto;
            if (this.horasEstimadas > videojuego.horasEstimadas) {
                return 1;
            }
            else if (this.horasEstimadas < videojuego.horasEstimadas) {
                return -1;
            }
            else {
                return 0;
            }
        }
        return 0;
    }
    // ...
    toString() {
        return `Videojuego:
    Título: ${this.titulo}
    Horas Estimadas: ${this.horasEstimadas}
    Entregado: ${this.entregado}
    Género: ${this.genero}
    Compañía: ${this.compania}`;
    }
}
