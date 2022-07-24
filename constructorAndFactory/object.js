/* Creating objects */
const person = {
    name: "Edivan",
    lastName: 'Sousa'
};

console.log(person.name, person.lastName);

/* Creating object 2 */
const personOne = new Object();
personOne.name = 'Edivan';
personOne.lastName = 'Sousa';
personOne.idade = 48;
personOne.speakName = function () {
    return (`${this.name} está falando seu nome e a idade de ${this.idade}.`);
};
personOne.getBirthDate = function () {
    const currentDate = new Date();
    return currentDate.getFullYear() - this.idade;
};
console.log(personOne.getBirthDate());
console.log(personOne.speakName());

for (let chave in personOne) {
    console.log(personOne[chave]);
}
