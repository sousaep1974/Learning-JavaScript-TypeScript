// UTILIZANDO OBJETOS
function createPerson (nome, sobrenome, idade){
return {nome, sobrenome, idade};
}

const pessoa1 = createPerson ('Luiz', 'Miranda', 25);
const pessoa2 = createPerson ('Maria', 'Oliveira', 32);
const pessoa3 = createPerson ('João', 'Moreira', 55);
const pessoa4 = createPerson ('Junior', 'Lara', 44);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade)

// Outra forma de criar objeto
const person = {
    name: "Edivan",
    middleName: "Pereira de",
    lastName: "Sousa",
    idade: 48,
    };
    
    for (let key in person){
      console.log(key, person[key]);
    }