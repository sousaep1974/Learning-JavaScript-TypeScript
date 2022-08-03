//Classe construtura
class Pessoa {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    //Método da classe
    falar() {
        console.log(`${this.name} está falando`);
    }

    comer() {
        console.log(`${this.name} está comendo`);
    }

    beber() {
        console.log(`${this.name} está bebendo`);
    }
}

// Estânciar - Todas elas herdam os métodos da classe
const p1 = new Pessoa('Edivan', 'Sousa')
const p2 = new Pessoa('Hellen', 'Sousa')
const p3 = new Pessoa('Iago', 'Sousa')
console.log(p1);
console.log(p2);
console.log(p3);