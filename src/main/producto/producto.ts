export abstract class Producto {
    private descripcion: String;
    constructor(descripcion: String){
        this.descripcion = descripcion;
    }
    abstract precio(): number;
    abstract stock(): number;
}