// Constructor -> molde (class)

function Person(name, lastName){
    this.name = name;
    this.lastName = lastName;
    //this.fullName = () => this.name + 'ORIGINAL' + this.lastName;
}

Person.prototype.fullName = function(){
    return this.name + 'teste' + this.lastName;
}

const person1 = new Person ('Edivan', 'Sousa');
const person2 = new Person ('Iago', 'Sousa');
const data = new Date();

console.dir(person1);
console.dir(person2);
console.dir(data);