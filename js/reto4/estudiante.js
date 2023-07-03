"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = __importDefault(require("./persona"));
class Estudiante extends persona_1.default {
    constructor(nombre, edad, sexo, calificacionActual) {
        super(nombre, edad, sexo);
        this.calificacionActual = calificacionActual;
    }
    getCalificacionActual() {
        return this.calificacionActual;
    }
    hacerNovillos() {
        return Math.random() < 0.5;
    }
}
exports.default = Estudiante;
