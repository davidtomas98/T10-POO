// Creación de las instancias de Libro
let libro1 = new Libro ("123456789", "El jardín de las palabras", "Shinkai Makoto", 200);
let libro2 = new Libro ("987654321", "Harry Potter y la piedra filosofal", "J.K. Rowling", 300);

// Imprimir la representación en cadena de los libros
console.log(libro1.toString());
console.log(libro2.toString());

// Comparar el número de páginas de los libros
if (libro1.numeroPaginas > libro2.numeroPaginas) {
    console.log(`El libro "${libro1.toStringTitulo()}" tiene más páginas.`);
} else if (libro2.numeroPaginas > libro1.numeroPaginas) {
    console.log(`El libro "${libro2.toStringTitulo()}" tiene más páginas.`);
} else {
    console.log("Ambos libros tienen la misma cantidad de páginas.");
}