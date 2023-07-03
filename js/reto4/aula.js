"use strict";
class Aula {
    constructor(id, capacidadMaxima, materia, profesor) {
        this.id = id;
        this.capacidadMaxima = capacidadMaxima;
        this.materia = materia;
        this.profesor = profesor;
        this.estudiantes = [];
    }
    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }
    agregarProfesor(profesor) {
        this.profesor = profesor;
    }
    puedeDarClase() {
        const porcentajeAprobados = this.calcularPorcentajeAprobados();
        const porcentajeAlumnos = this.calcularPorcentajeAlumnos();
        return (this.profesor.estaDisponible() &&
            this.profesor.getMateria() === this.materia &&
            porcentajeAlumnos > 0.5 &&
            porcentajeAprobados > 0.5);
    }
    calcularPorcentajeAprobados() {
        const aprobados = this.estudiantes.filter((estudiante) => estudiante.getCalificacionActual() >= 5);
        return aprobados.length / this.estudiantes.length;
    }
    calcularPorcentajeAlumnos() {
        return this.estudiantes.length / this.capacidadMaxima;
    }
    mostrarAprobados() {
        const aprobados = this.estudiantes.filter((estudiante) => estudiante.getCalificacionActual() >= 5);
        const aprobadosMasculinos = aprobados.filter((estudiante) => estudiante.getSexo() === 'masculino');
        const aprobadosFemeninos = aprobados.filter((estudiante) => estudiante.getSexo() === 'femenino');
        console.log(`Aprobados: ${aprobados.length}`);
        console.log(`Aprobados masculinos: ${aprobadosMasculinos.length}`);
        console.log(`Aprobados femeninos: ${aprobadosFemeninos.length}`);
    }
}
