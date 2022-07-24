 /*
|-------------------------------------------------------------------------------
| Edivan Sousa
|-------------------------------------------------------------------------------
| Este arquivo faz parte de uma acervo de código produzido durante aulas do JS
| 
|
*/

// OPERADORES LÓGICOS

/*
&& -> AND -> E --> Todas as expressões precisam ser verdade para retornar true.
|| -> OR  -> OU --> Todas as expressões precisam ser falso para retornar falso, se tiver apenas uma verdade, será true.
!  -> NOT -> NÃO 
*/

// OPERADORES LÓGICOS && e ||
// && -> Todos os valores precisam ser verdadeiros para que retorne verdadeiro,
// Quando todos os valores são verdadeiros imprime o último valor
//
// || -> Retorna verdadeiro (true || false || true) qualquer valor for verdadeiro


// Valores avaliados como FALSY em JavaScript
/*
false
0
" ", '', ` ` -> stings vázias
null / undefined
NaN
*/
// console.log("Luiz" && "Pedro"); // Como todos os valores são true, vai retornar "Pedro"
// console.log("Luiz" && null && "Pedro" && NaN) // Como há valores true vai retornar o primeiro valor false encontrado

// //UTILIZANDO O OPERADOR AND (&&) EM CONDICIONADOR DE FUNÇÕES

// function falaOi (){ 
//   return "Oi";

// }
// let vaiExecutar = "João";
// console.log(vaiExecutar && falaOi());


// ESTRUTURAS LÓGICAS COM (OR)

let corUsuario = "Azul"
let corPadrao = corUsuario || "Preto"

console.log(corPadrao);




const expressaoAnd = true && true && true && true;
console.log(expressaoAnd);

const expressaoOr = true || false;
console.log(expressaoOr);

const expressaoNot = !true; //Não é verdade
console.log(expressaoNot);

