// NEW OBJECTS CAN INHERIT GENERAL ATTRIBUTES.

// General e commomn function 
function Product(name, price) {
    this.name = name;
    this.price = price;
};
//Adding methods 
Product.prototype.addition = function (amount) {
    this.price += amount;
};
Product.prototype.discount = function (amount) {
    this.price += amount;
};

//Adding new objects and new attributes
function Camiseta(name, price, colour) {
    Product.call(this, name, price);
    this.colour = colour;
};
//prototyping the new object with general assignaments
Camiseta.prototype = Object.create(Product.prototype);
Camiseta.prototype.constructor = Camiseta;

function Caneca(name, price, material, stock) {
    Product.call(this, name, price, material, stock);
    this.material = material;
};

Object.defineProperty(this, 'stock',{
    enumerable: true,
    configurable: false,
    get: function () {
        return stock;
    },
    set: function (value) {
        if (typeof value !== 'number') return
        stock = value;
    }
});
//prototyping the new object with general assignaments
Caneca.prototype = Object.create(Product.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Product('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Amigos', 13, 'vidro', 5)
console.log(produto);
console.log(camiseta);
console.log(caneca);
