// UTILIZAÇÃO DE VARIÁVEIS 

// Não podemos usar palavras reservadas como variáveis
// Variáveis precisam ter nome significativos
// Nãp podemos iniciar o nome de uma variável com números
// Não pode conter espaços ou traços
// Utilizaremos camelCase
// Variáveis são case-sensitive
// Não podemos redeclar variáveis usando let
// Não use VAR, use LET

var nameVar = "Edivan";
var nameVar = "Sousa"; // É permitido redeclarar var
/*
let nome1 = "Edivan";
let nome1 = "Sousa"; // Não é permitido redeclarar let

const nome2 = "Edivan";
const nome2 = "Sousa"; // Não é permitido redeclarar const
*/
console.log(nameVar);




let nameLet = 'Edivan';

console.log(nameLet, " Nasceu em 1984");
console.log("Em 2000", nameLet, "conheceu Maria");
console.log(nameLet, "casou-se com Maria em 2012");
console.log("Maria teve um filho com", nameLet, "em 2015");
console.log("O filho de", nameLet, "se chma Eduardo");

/*UTILIZAÇÃO DE VARIÁVEIS COM const E COM let
Templete strings usando crase ao invés de aspas ou aspas dupla.
*/

/* 
Professor Edivan Sousa tem 47 anos, pesa 80 kg
tem 1.76 de altura e seu IMC é de 26.
*/

const nome = "Edivan";
const sobrenome = "Sousa";
const profissão = "Professor";
const idade = 48;
const peso = 80;
const altura = 1.76;
let IMC; // Peso / (altura * altura)
let anoDoNascimento; // idade atual - o ano atual
imc = peso /(altura * altura);
anoDoNascimento = 2022 - idade;

console.log (`${profissão} ${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${imc}`);

