class Asiento {
    private fila: number;
    private columna: string;
    private ocupado: boolean;

    constructor(fila: number, columna: string) {
        this.fila = fila;
        this.columna = columna;
        this.ocupado = false;
    }

    public getFila(): number {
        return this.fila;
    }

    public getColumna(): string {
        return this.columna;
    }

    public estaOcupado(): boolean {
        return this.ocupado;
    }

    public ocupar(): void {
        this.ocupado = true;
    }
}

export default Asiento;
