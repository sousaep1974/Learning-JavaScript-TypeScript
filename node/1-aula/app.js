const { speakName, name, surname } = require('./mod1');
const { Person } = require('./Person');


console.log(surname, name);
console.log(speakName());

const p1 = new Person('Filipe')
console.log(p1);