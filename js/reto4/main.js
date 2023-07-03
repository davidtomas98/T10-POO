"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const estudiante_1 = __importDefault(require("./estudiante"));
const profesor_1 = __importDefault(require("./profesor"));
const aula_1 = __importDefault(require("./aula"));
// Crear profesor
const profesor = new profesor_1.default('Juan', 35, 'masculino', 'matemáticas');
// Crear estudiantes
const estudiante1 = new estudiante_1.default('Ana', 18, 'femenino', 7);
const estudiante2 = new estudiante_1.default('Pedro', 19, 'masculino', 6);
const estudiante3 = new estudiante_1.default('María', 20, 'femenino', 9);
// Crear aula
const aula = new aula_1.default(1, 20, 'matemáticas', profesor);
// Agregar estudiantes al aula
aula.agregarEstudiante(estudiante1);
aula.agregarEstudiante(estudiante2);
aula.agregarEstudiante(estudiante3);
// Verificar si se puede dar clase
if (aula.puedeDarClase()) {
    console.log('Se puede dar clase en el aula');
    aula.mostrarAprobados();
}
else {
    console.log('No se puede dar clase en el aula');
}
