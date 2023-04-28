import { Producto } from "./producto";

export class productoSimple extends Producto{

    private precioSimple: number;
    private stockProducto: number;

    constructor(descripcion: string, precioSimple: number, stockProducto: number){
        super(descripcion);
        this.precioSimple = precioSimple;
        this.stockProducto = stockProducto;
    }

    precio(): number {
        return this.precioSimple;
    }
    stock(): number {
        return this.stockProducto;
    }

}