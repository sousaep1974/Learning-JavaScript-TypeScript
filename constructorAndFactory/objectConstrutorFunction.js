function Person(name, lastName){
    this.name = name;
    this.lastName = lastName; 
    Object.freeze(this) // Trava as alterações do objeto (this)
};

const p1 = new Person('Edivan', 'Sousa')
const p2 = new Person('Iago', 'Sousa')
console.log(p1);
console.log(p2);