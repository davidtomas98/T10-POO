"use strict";
class Libro {
    constructor(isbn, titulo, autor, numeroPaginas) {
        // Inicialización de las propiedades del libro
        this._isbn = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._numeroPaginas = numeroPaginas;
    }
    // Getters y Setters para las propiedades del libro
    get isbn() {
        return this._isbn;
    }
    set isbn(value) {
        this._isbn = value;
    }
    get titulo() {
        return this._titulo;
    }
    set titulo(value) {
        this._titulo = value;
    }
    get autor() {
        return this._autor;
    }
    set autor(value) {
        this._autor = value;
    }
    get numeroPaginas() {
        return this._numeroPaginas;
    }
    set numeroPaginas(value) {
        this._numeroPaginas = value;
    }
    // Método toString() para representar el libro como una cadena de texto
    toString() {
        return `El libro con ISBN ${this._isbn} creado por ${this._autor} tiene ${this._numeroPaginas} páginas.`;
    }
    // Método toStringTitulo() para obtener solo el título del libro
    toStringTitulo() {
        return this._titulo;
    }
}
