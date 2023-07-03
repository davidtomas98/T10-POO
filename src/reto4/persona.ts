class Persona {
    private nombre: string;
    private edad: number;
    private sexo: string;

    constructor(nombre: string, edad: number, sexo: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getEdad(): number {
        return this.edad;
    }

    public getSexo(): string {
        return this.sexo;
    }
}