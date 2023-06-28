"use strict";
// Creación de una ecuación general
const ecuacion = new Raices(1, -3, 2);
// Mostrar el valor del discriminante
console.log("Discriminante:", ecuacion.getDiscriminante());
// Comprobar si tiene dos soluciones
console.log("Tiene dos soluciones:", ecuacion.tieneRaices());
// Comprobar si tiene una única solución
console.log("Tiene una única solución:", ecuacion.tieneRaiz());
// Calcular las soluciones de la ecuación
ecuacion.calcular();
// Obtener las posibles soluciones
ecuacion.obtenerRaices();
// Obtener la única raíz
ecuacion.obtenerRaiz();
//Ecuación con dos soluciones reales
const ecuacion1 = new Raices(1, -5, 6);
ecuacion1.calcular();
//Ecuación con una única solución real:
const ecuacion2 = new Raices(2, 4, 2);
ecuacion2.calcular();
//Ecuación sin soluciones reales:
const ecuacion3 = new Raices(3, 2, 1);
ecuacion3.calcular();
//Ecuación con discriminante igual a cero:
const ecuacion4 = new Raices(1, -6, 9);
ecuacion4.calcular();
//Ecuación con coeficientes negativos:
const ecuacion5 = new Raices(-1, 2, -1);
ecuacion5.calcular();
