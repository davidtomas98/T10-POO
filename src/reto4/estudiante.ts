class Estudiante extends Persona {
    private calificacionActual: number;

    constructor(nombre: string, edad: number, sexo: string, calificacionActual: number) {
        super(nombre, edad, sexo);
        this.calificacionActual = calificacionActual;
    }

    public getCalificacionActual(): number {
    return this.calificacionActual;
}

    public hacerNovillos(): boolean {
        return Math.random() < 0.5;
    }
}