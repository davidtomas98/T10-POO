
class Serie implements Entregable {
    private titulo: string;
    private numeroTemporadas: number;
    private entregado: boolean;
    private genero: string;
    private creador: string;

    constructor(titulo: string, creador: string) {
        this.titulo = titulo;
        this.numeroTemporadas = 3;
        this.entregado = false;
        this.genero = "";
        this.creador = creador;
    }

    // Métodos y propiedades de la clase Serie

    public getTitulo(): string {
        return this.titulo;
    }

    public getNumeroTemporadas(): number {
        return this.numeroTemporadas;
    }

    public getEntregado(): boolean {
        return this.entregado;
    }

    public getGenero(): string {
        return this.genero;
    }

    public getCreador(): string {
        return this.creador;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public setNumeroTemporadas(numeroTemporadas: number): void {
        this.numeroTemporadas = numeroTemporadas;
    }

    public setGenero(genero: string): void {
        this.genero = genero;
    }

    public setCreador(creador: string): void {
        this.creador = creador;
    }

    public entregar(): void {
        this.entregado = true;
    }

    public devolver(): void {
        this.entregado = false;
    }

    public isEntregado(): boolean {
        return this.entregado;
    }

    public compareTo(objeto: Entregable): number {
        if (objeto instanceof Serie) {
        const serie = objeto as Serie;
        if (this.numeroTemporadas > serie.numeroTemporadas) {
            return 1;
        } else if (this.numeroTemporadas < serie.numeroTemporadas) {
            return -1;
        } else {
            return 0;
        }
        }
        return 0;
    }

    public toString(): string {
        return `Serie:
    Título: ${this.titulo}
    Número de Temporadas: ${this.numeroTemporadas}
    Entregado: ${this.entregado}
    Género: ${this.genero}
    Creador: ${this.creador}`;
    }
}
