// UTILIZANDO ARRAYS
// pop (remove) e push (adiciona) do FINAL do array
// shift (remove) e unshift (adiciona) do INÍCIO do array
const nomes = ['Eduardo', 'Maria', 'Joana'];
console.log(nomes);

//Altera o dado do item 2 - Joana para João
nomes [2] = 'João';
console.log(nomes);

// Remove o item final do array - Edmundo
nomes.pop()
console.log(nomes);

//Adiciona nomes nos itens finais do array.
nomes.push('Edivan')
nomes.push('Eva')
nomes.push('Edmundo')
console.log(nomes);

// Remove o item inicial [0]  - Eduardo
nomes.shift();
console.log(nomes);

//Adiciona item no início do array
nomes.unshift('Carlos')
nomes.unshift('Sérgio')
console.log(nomes);


// Fatia os dados do array a serem exibidos, colocando os itens como parâmentro.
const novo = nomes.slice(1, -2); // começa do item 1 e elimina os dois últimos.
console.log(novo);

//UTILIZAR SPLIT E JOIN COM STRINGS

const nomeCompletoString = 'Edivan Pereira Sousa';
const nomesFatiado = nomeCompletoString.split(' '); // Transforma strings num array
console.log(nomesFatiado);

const nomeCompletoArray = ['Edivan', 'Pereira', 'Sousa'];
const nomesJuntados = nomeCompletoArray.join(' '); // Transforma array num string
console.log(nomesJuntados);






