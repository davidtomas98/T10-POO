"use strict";
class Libro {
    constructor(isbn, titulo, autor, numeroPaginas) {
        // Inicialización de los atributos del libro
        this._isbn = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._numeroPaginas = numeroPaginas;
    }
    // Getters y Setters para las propiedades del libro
    get isbn() {
        return this._isbn;
    }
    set isbn(newIsbn) {
        this._isbn = newIsbn;
    }
    get titulo() {
        return this._titulo;
    }
    set titulo(newTitulo) {
        this._titulo = newTitulo;
    }
    get autor() {
        return this._autor;
    }
    set autor(newAutor) {
        this._autor = newAutor;
    }
    get numeroPaginas() {
        return this._numeroPaginas;
    }
    set numeroPaginas(newNumeroPaginas) {
        this._numeroPaginas = newNumeroPaginas;
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
