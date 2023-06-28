class Libro {
  // Propiedades privadas del libro
  private _isbn: string;
  private _titulo: string;
  private _autor: string;
  private _numeroPaginas: number;
  
  constructor(isbn: string, titulo: string, autor: string, numeroPaginas: number) {
    // Inicialización de las propiedades del libro
    this._isbn = isbn;
    this._titulo = titulo;
    this._autor = autor;
    this._numeroPaginas = numeroPaginas;
  }
  
  // Getters y Setters para las propiedades del libro
  get isbn(): string {
    return this._isbn;
  }

  set isbn(value: string) {
    this._isbn = value;
  }

  get titulo(): string {
    return this._titulo;
  }

  set titulo(value: string) {
    this._titulo = value;
  }

  get autor(): string {
    return this._autor;
  }

  set autor(value: string) {
    this._autor = value;
  }

  get numeroPaginas(): number {
    return this._numeroPaginas;
  }

  set numeroPaginas(value: number) {
    this._numeroPaginas = value;
  }

  // Método toString() para representar el libro como una cadena de texto
  toString(): string {
    return `El libro con ISBN ${this._isbn} creado por ${this._autor} tiene ${this._numeroPaginas} páginas.`;
  }

  // Método toStringTitulo() para obtener solo el título del libro
  toStringTitulo(): string {
    return this._titulo;
  }  
}