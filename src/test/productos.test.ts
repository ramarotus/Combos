import { combo } from "../main/producto/combo";
import { Producto } from "../main/producto/producto";
import { productoSimple } from "../main/producto/productoSimple";

var unaMoto: Producto;
var unCasco: Producto;
var unChaleco: Producto;
var unPiloto: Producto;
var unGuante: Producto;
var unCombo: combo;

beforeEach(() => {
    unaMoto = new productoSimple("moto", 150000, 5);
    unCasco = new productoSimple("casco",1000, 50);
    unChaleco = new productoSimple("chaleco",250, 15);
    unPiloto = new productoSimple("piloto", 4000, 35);
    unGuante = new productoSimple("guantes",250, 10);

    unCombo = new combo("nuevo combo");
    unCombo.agregarProducto(unGuante);
    unCombo.agregarProducto(unCasco);
    unCombo.agregarProducto(unChaleco);
})

test("Probando Precios Combos", () => {
    expect(unCombo.precio()).toBe(1500);
});
test("Probando Stock Combos", () => {
    expect(unCombo.stock()).toBe(10);
});