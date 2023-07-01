import Entregable from "./entregable";

class Videojuego implements Entregable {
    private titulo: string;
    private horasEstimadas: number;
    private entregado: boolean;
    private genero: string;
    private compania: string;

    constructor(titulo: string, horasEstimadas: number, compania: string) {
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas;
        this.entregado = false;
        this.genero = "";
        this.compania = compania;
    }

    // Métodos y propiedades de la clase Videojuego

    public getTitulo(): string {
        return this.titulo;
    }
    
    public getHorasEstimadas(): number {
        return this.horasEstimadas;
    }
    
    public getEntregado(): boolean {
        return this.entregado;
    }
    
    public getGenero(): string {
        return this.genero;
    }
    
    public getCompania(): string {
        return this.compania;
    }
    
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }
    
    public setHorasEstimadas(horasEstimadas: number): void {
        this.horasEstimadas = horasEstimadas;
    }
    
    public setGenero(genero: string): void {
        this.genero = genero;
    }
    
    public setCompania(compania: string): void {
        this.compania = compania;
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
        if (objeto instanceof Videojuego) {
            const videojuego = objeto as Videojuego;
            if (this.horasEstimadas > videojuego.horasEstimadas) {
                return 1;
            } else if (this.horasEstimadas < videojuego.horasEstimadas) {
                return -1;
            } else {
                return 0;
            }
        }
        return 0;
    }

    // ...

    public toString(): string {
        return `Videojuego:
    Título: ${this.titulo}
    Horas Estimadas: ${this.horasEstimadas}
    Entregado: ${this.entregado}
    Género: ${this.genero}
    Compañía: ${this.compania}`;
    }
    }

export default Videojuego;
