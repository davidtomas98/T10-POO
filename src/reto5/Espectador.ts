class Espectador {
    private nombre: string;
    private edad: number;
    private dinero: number;

    constructor(nombre: string, edad: number, dinero: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.dinero = dinero;
    }
    
    public getNombre(): string {
        return this.nombre;
    }

    public getEdad(): number {
        return this.edad;
    }

    public getDinero(): number {
        return this.dinero;
    }
}