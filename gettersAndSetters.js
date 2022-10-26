// Define Property and Properties

function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    //this.stock = stock;
    let privateStock = stock;

    // Here you define the properties of only one attribute
    Object.defineProperty(this, 'stock', {
        enumerable: true, // (true) show key, (false) hide key
        //value: stock, // show or change the value
        //writable: false, // (true) allows changing the volue, (false) does not
        configurable: true, // (true) allows redoing settings, (false) does not
        get: function () {
            return stock;
        },
        set: function (val) {
            if (typeof val !== 'number') {
                throw new TypeError('Mensagem de erro');
            }
            privateStock = val;
        }
    });
}

function createProduct(name) {
    return {
        get name() {
            return name;
        },

        set name(val) {
            val = val.replace('coisa.', '');
            name = val;
        }
    };
}

const p2 = createProduct('Camiseta');
p2.name = "Qualquer coisa.";
console.log(p2.name);
