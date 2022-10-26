// FILTER, MAP, REDUCE

/* const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados); 
*/

/* function callBackFilter(valor, indice, array) {
if (valor > 10) {
return true;
} else {
return false;
}
}
const numerosFiltrados = numeros.filter(callBackFilter);
console.log(numerosFiltrados); */

// MAP () PODEMOS ALTERAR OS VALORES DO ARRAY INICIAL
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmdobro = numeros.map((valor) => valor * 2);
//console.log(numerosEmdobro)

// UTILIZANDO MAP() PARA MANIPULAR OBJETOS DE UM ARRAY

const pessoas = [
{ nome: "Luiz", idade: 62 },
{ nome: "Maria", idade: 23 },
{ nome: "Eduardo", idade: 55 },
{ nome: "Letícia", idade: 19 },
{ nome: "Rosana", idade: 32 },
{ nome: "Wallace", idade: 47 },
];

const nomes = pessoas.map((obj) => obj.nome);
console.log(nomes);

const idade = pessoas.map((obj) => ({ idade: obj.idade }));
console.log(idade);
