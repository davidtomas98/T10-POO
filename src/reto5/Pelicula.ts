class Pelicula {
    private titulo: string;
    private duracion: number;
    private edadMinima: number;
    private director: string;

    constructor(titulo: string, duracion: number, edadMinima: number, director: string) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.edadMinima = edadMinima;
        this.director = director;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getDuracion(): number {
        return this.duracion;
    }

    public getEdadMinima(): number {
        return this.edadMinima;
    }

    public getDirector(): string {
        return this.director;
    }
}