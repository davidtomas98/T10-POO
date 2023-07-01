import Persona from './persona';

class Profesor extends Persona {
    private materia: string;

    constructor(nombre: string, edad: number, sexo: string, materia: string) {
        super(nombre, edad, sexo);
        this.materia = materia;
    }

    public getMateria(): string {
        return this.materia;
    }

    public estaDisponible(): boolean {
        return Math.random() > 0.2;
    }
}

export default Profesor;
