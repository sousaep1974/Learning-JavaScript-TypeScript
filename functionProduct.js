function Product(name, price) {
    this.name = name;
    this.price = price;
};

Product.prototype.discount = function (percentage) {
    this.price = this.price - (this.price * (percentage / 100));
};

Product.prototype.addition = function (percentage) {
    this.price = this.price + (this.price * (percentage / 100));
};

const p1 = new Product('Camiseta', 50);
const p2 = {
    name: 'Caneca',
    price: 15
};
Object.setPrototypeOf(p2, Product.prototype);

p1.addition(0)
p1.discount(10)
console.log(p1);
p2.addition(0)
p2.discount(10)
console.log(p2);