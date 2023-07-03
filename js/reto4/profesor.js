"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = __importDefault(require("./persona"));
class Profesor extends persona_1.default {
    constructor(nombre, edad, sexo, materia) {
        super(nombre, edad, sexo);
        this.materia = materia;
    }
    getMateria() {
        return this.materia;
    }
    estaDisponible() {
        return Math.random() > 0.2;
    }
}
exports.default = Profesor;
