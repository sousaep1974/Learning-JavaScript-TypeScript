// Define Property

function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    //this.stock = stock;

    /* Here you define the property 'stock' */
    Object.defineProperty(this, 'stock', {
        enumerable: false, // Mostrar a chave
        value: stock, // Mostrar o valor do atributo, no caso "stock"
        writable: false, // (true) Permite ou (false) não permite alterar valor
        configurable: true, // (true) Permite ou (false) não permite refazer em novamente
    });

    /* Here you redefine the property 'stock' with configurable in true */
    Object.defineProperty(this, 'stock', {
        enumerable: true, // Mostrar a chave
        value: stock, // Mostrar o valor do atributo, no caso "stock"
        writable: true, // (true) Permite ou (false) não permite alterar valor
        configurable: false, // (true) Permite ou (false) não permite refazer em novamente
    });
}

const p1 = new Product('Camiseta', 20, 3);
p1.stock = 4; // whitable = true
delete p1.stock; // configurable = false
console.log(p1); console.log(Object.keys(p1))

for (let key in p1) {
    console.log(key);
}