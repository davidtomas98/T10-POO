"use strict";
class Serie {
    constructor(titulo, creador) {
        this.titulo = titulo;
        this.numeroTemporadas = 3;
        this.entregado = false;
        this.genero = "";
        this.creador = creador;
    }
    // Métodos y propiedades de la clase Serie
    getTitulo() {
        return this.titulo;
    }
    getNumeroTemporadas() {
        return this.numeroTemporadas;
    }
    getEntregado() {
        return this.entregado;
    }
    getGenero() {
        return this.genero;
    }
    getCreador() {
        return this.creador;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setNumeroTemporadas(numeroTemporadas) {
        this.numeroTemporadas = numeroTemporadas;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setCreador(creador) {
        this.creador = creador;
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
        if (objeto instanceof Serie) {
            const serie = objeto;
            if (this.numeroTemporadas > serie.numeroTemporadas) {
                return 1;
            }
            else if (this.numeroTemporadas < serie.numeroTemporadas) {
                return -1;
            }
            else {
                return 0;
            }
        }
        return 0;
    }
    toString() {
        return `Serie:
    Título: ${this.titulo}
    Número de Temporadas: ${this.numeroTemporadas}
    Entregado: ${this.entregado}
    Género: ${this.genero}
    Creador: ${this.creador}`;
    }
}
