class Raices {
    private a: number;
    private b: number; 
    private c: number;  
  
    constructor(a: number, b: number, c: number) {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    // Método para calcular el discriminante de la ecuación
    getDiscriminante(): number {
      return Math.pow(this.b, 2) - 4 * this.a * this.c;
    }
  
    // Método para comprobar si la ecuación tiene dos soluciones
    tieneRaices(): boolean {
      const discriminante = this.getDiscriminante();
      return discriminante >= 0;
    }
  
    // Método para comprobar si la ecuación tiene una única solución
    tieneRaiz(): boolean {
      const discriminante = this.getDiscriminante();
      return discriminante === 0;
    }
  
    // Método para calcular y mostrar las soluciones de la ecuación
    calcular(): void {
      const discriminante = this.getDiscriminante();
      if (discriminante > 0) {
        const x1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
        const x2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
        console.log(`La ecuación tiene dos soluciones: x1 = ${x1}, x2 = ${x2}`);
      } else if (discriminante === 0) {
        const x = -this.b / (2 * this.a);
        console.log(`La ecuación tiene una única solución: x = ${x}`);
      } else {
        console.log("La ecuación no tiene soluciones reales.");
      }
    }
  
    // Método para obtener y mostrar las posibles soluciones de la ecuación
    obtenerRaices(): void {
      const discriminante = this.getDiscriminante();
      if (discriminante >= 0) {
        const x1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
        const x2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
        console.log(`Las posibles soluciones son: x1 = ${x1}, x2 = ${x2}`);
      } else {
        console.log("La ecuación no tiene soluciones reales.");
      }
    }
  
    // Método para obtener y mostrar la única raíz de la ecuación
    obtenerRaiz(): void {
      const discriminante = this.getDiscriminante();
      if (discriminante === 0) {
        const x = -this.b / (2 * this.a);
        console.log(`La única raíz es: x = ${x}`);
      } else {
        console.log("La ecuación no tiene una única raíz.");
      }
    }
}