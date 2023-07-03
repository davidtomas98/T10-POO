"use strict";
// Crear profesor
const profesor = new Profesor('Juan', 35, 'masculino', 'matemáticas');
// Crear estudiantes
const estudiante1 = new Estudiante('Ana', 18, 'femenino', 7);
const estudiante2 = new Estudiante('Pedro', 19, 'masculino', 6);
const estudiante3 = new Estudiante('María', 20, 'femenino', 9);
const estudiante4 = new Estudiante('Carlos', 22, 'masculino', 8);
const estudiante5 = new Estudiante('Laura', 21, 'femenino', 7);
const estudiante6 = new Estudiante('Javier', 20, 'masculino', 6);
const estudiante7 = new Estudiante('Sofía', 19, 'femenino', 9);
// Crear aula
const aula = new Aula(1, 10, 'matemáticas', profesor);
// Agregar estudiantes al aula
aula.agregarEstudiante(estudiante1);
aula.agregarEstudiante(estudiante2);
aula.agregarEstudiante(estudiante3);
aula.agregarEstudiante(estudiante4);
aula.agregarEstudiante(estudiante5);
aula.agregarEstudiante(estudiante6);
aula.agregarEstudiante(estudiante7);
// Verificar si se puede dar clase
if (aula.puedeDarClase()) {
    console.log('Se puede dar clase en el aula');
    aula.mostrarAprobados();
}
else {
    console.log('No se puede dar clase en el aula');
}
