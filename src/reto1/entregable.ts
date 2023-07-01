interface Entregable {
    entregar(): void;
    devolver(): void;
    isEntregado(): boolean;
    compareTo(objeto: Entregable): number;
}

export default Entregable;
