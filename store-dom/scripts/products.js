class Product {
    constructor(id,title,price,stock,images,onsale,supplier,colors,description){
        this.id=id
        this.title=title
        this.price=price
        this.stock=stock
        this.images=images
        this.onsale=onsale        
        this._supplier=supplier
        this.colors=colors    
        this.description=description
    }
}
const imagenProd1=["./assets/laptop1.jfif","./assets/laptop2.jfif","./assets/laptop3.jfif","./assets/laptop4.jfif"]
const imagenProd2=["./assets/tablet1.jfif","./assets/tablet2.jfif","./assets/tablet3.jfif","./assets/tablet4.jfif"]
const imagenProd3=["./assets/motorola1.jfif","./assets/motorola2.jfif","./assets/motorola3.jfif","./assets/motorola4.jfif"]
const imagenProd4=["./assets/AirPods1.jfif","./assets/AirPods2.jfif","./assets/AirPods3.jfif","./assets/AirPods4.jfif"]
const imagenProd5=["./assets/teclado1.jfif","./assets/teclado2.jfif","./assets/teclado3.jfif","./assets/teclado4.jfif"]   
const imagenProd6=["./assets/mouse1.jfif","./assets/mouse2.jfif","./assets/mouse3.jfif","./assets/mouse4.jfif"]
const imagenProd7=["./assets/monitor1.jfif","./assets/monitor2.jfif","./assets/monitor3.jfif","./assets/monitor4.jfif"]
const imagenProd8=["./assets/nintendo1.jfif","./assets/nintendo2.jfif","./assets/nintendo3.jfif","./assets/nintendo4.jfif"]

const prod1 = new Product("P001LM","Laptop Mackbook 15'","1600","50",imagenProd1,"True","Tiendamia",["Plomo", "Negro", "Blanco","Azul"],"MacBook 15' 2024 M3")
const prod2 = new Product("P002TL","Tablet Lenovo 4GB 128GB","1000","20",imagenProd2,"True","Tiendamia",["Plomo", "Negro", "Blanco","Azul"],"Tablet Lenovo");
const prod3 = new Product("P003MG","Motorola G54 4GB 256GB","650","40",imagenProd3,"True","Tiendamia",["Plomo", "Negro", "Blanco","Azul"],"Motog G54");
const prod4 = new Product("P004AP","AirPods Pro","500","30",imagenProd4,"True","Tiendamia",["Plomo", "Negro", "Blanco","Azul"],"Audifonos Bluetoh")
const prod5 = new Product("P005TC","Teclado Gamer ","200","20",imagenProd5,"True","Tiendamia",["Plomo", "Negro", "Blanco","Azul"],"Teclado Mecanico")
const prod6 = new Product("P006MI","Mouse","120","45",imagenProd6,"True","Tiendamia",["Plomo", "Negro", "Blanco","Azul"],"Mouse Gamer")
const prod7 = new Product("P007ML","Monitor Lenovo G27","980","45",imagenProd7,"True","Tiendamia",["Plomo", "Negro", "Blanco","Azul"],"Monito lenovo de 27pulgadas")
const prod8 = new Product("P008NS","Nintendo Switch","1499","45",imagenProd8,"True","Tiendamia",["Plomo", "Negro", "Rojjo","Azul"],"Nintendo Switch Oled Mario Red")


const products = [prod1,prod2,prod3,prod4,prod5,prod6,prod7,prod8];

