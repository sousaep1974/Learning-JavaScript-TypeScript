// Define Property and Properties

function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;

    // Here you define the properties of only one attribute
    Object.defineProperty(this, 'stock', {
        enumerable: false, // (true) show key, (false) hide key
        value: stock, // show or change the value
        writable: false, // (true) allows changing the volue, (false) does not
        configurable: true, // (true) allows redoing settings, (false) does not
    });

    //Here you define properties several attributes: name, price, stock
    Object.defineProperties(this, {
        name: {
            enumerable: true, // (true) show key, (false) hide key
            value: 'Camisa', // show or change the value
            writable: true, // (true) allows changing the volue, (false) does not
            configurable: true, // (true) allows redoing settings, (false) does not
        },

        price: {
            enumerable: true,
            value: 21,
            writable: true,
            configurable: true,
        },

        stock: {
            enumerable: true,
            value: 4,
            writable: true,
            configurable: true,
        },
    });
}

const p1 = new Product('Camiseta', 20, 3);
console.log(p1)

//for (let key in p1) { console.log(key) }