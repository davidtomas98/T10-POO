class Aula {
    private id: number;
    private capacidadMaxima: number;
    private materia: string;
    private estudiantes: Estudiante[];
    private profesor: Profesor;

    constructor(id: number, capacidadMaxima: number, materia: string, profesor: Profesor) {
        this.id = id;
        this.capacidadMaxima = capacidadMaxima;
        this.materia = materia;
        this.profesor = profesor;
        this.estudiantes = [];
    }

    public agregarEstudiante(estudiante: Estudiante): void {
        this.estudiantes.push(estudiante);
    }

    public agregarProfesor(profesor: Profesor): void {
        this.profesor = profesor;
    }

    public puedeDarClase(): boolean {
        const porcentajeAprobados = this.calcularPorcentajeAprobados();
        const porcentajeAlumnos = this.calcularPorcentajeAlumnos();

    return (
        this.profesor.estaDisponible() &&
        this.profesor.getMateria() === this.materia &&
        porcentajeAlumnos > 0.5 &&
        porcentajeAprobados > 0.5
        );
    }

    private calcularPorcentajeAprobados(): number {
        const aprobados = this.estudiantes.filter((estudiante) => estudiante.getCalificacionActual() >= 5);
        return aprobados.length / this.estudiantes.length;
    }

    private calcularPorcentajeAlumnos(): number {
        return this.estudiantes.length / this.capacidadMaxima;
    }

    public mostrarAprobados(): void {
        const aprobados = this.estudiantes.filter((estudiante) => estudiante.getCalificacionActual() >= 5);
        const aprobadosMasculinos = aprobados.filter((estudiante) => estudiante.getSexo() === 'masculino');
        const aprobadosFemeninos = aprobados.filter((estudiante) => estudiante.getSexo() === 'femenino');

        console.log(`Aprobados: ${aprobados.length}`);
        console.log(`Aprobados masculinos: ${aprobadosMasculinos.length}`);
        console.log(`Aprobados femeninos: ${aprobadosFemeninos.length}`);
    }
}