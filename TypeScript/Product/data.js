"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(id, title, price, stock, onsale, supplier, colors, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.onsale = onsale;
        this._supplier = supplier;
        this.colors = colors;
        this.description = description;
    }
    return Product;
}());
var prod1 = new Product("P001LM", "Laptop Mackbook 15'", "1600", "50", "True", "Tiendamia", ["Plomo", "Negro", "Blanco", "Azul"], "MacBook 15' 2024 M3");
var prod2 = new Product("P002TL", "Tablet Lenovo 4GB 128GB", "1000", "20", "True", "Tiendamia", ["Plomo", "Negro", "Blanco", "Azul"], "Tablet Lenovo");
var prod3 = new Product("P003MG", "Motorola G54 4GB 256GB", "650", "40", "True", "Tiendamia", ["Plomo", "Negro", "Blanco", "Azul"], "Motog G54");
var prod4 = new Product("P004AP", "AirPods Pro", "500", "30", "True", "Tiendamia", ["Plomo", "Negro", "Blanco", "Azul"], "Audifonos Bluetoh");
var prod5 = new Product("P005TC", "Teclado Gamer ", "200", "20", "True", "Tiendamia", ["Plomo", "Negro", "Blanco", "Azul"], "Teclado Mecanico");
var prod6 = new Product("P006MI", "Mouse", "120", "45", "True", "Tiendamia", ["Plomo", "Negro", "Blanco", "Azul"], "Mouse Gamer");
var prod7 = new Product("P007ML", "Monitor Lenovo G27", "980", "45", "True", "Tiendamia", ["Plomo", "Negro", "Blanco", "Azul"], "Monito lenovo de 27pulgadas");
var prod8 = new Product("P008NS", "Nintendo Switch", "1499", "45", "True", "Tiendamia", ["Plomo", "Negro", "Rojjo", "Azul"], "Nintendo Switch Oled Mario Red");
var products = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8];
console.log(products);
