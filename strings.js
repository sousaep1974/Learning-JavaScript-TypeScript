/* PODEMO UTILIZAR ASPAS DUPLA, PADRÃO MAIS USADO, OU ASPAS SIMPLES. 
PODE USAR CRASE (`) PARA PODER TER A LIBERDADE AS ASPAS NA SUA STRNG, CASO PRECISE, ASSIM COMO, COMO POR EXEMPLO ${suaVariavel}.
OUTROS RECUSOS: barras invertida (\) para escapar um caractere seguinte.
*/
// MAIS COMUM É ASPAS DUPLA.

// STRING SÃO INDEXADAS [0,1,2]


//                  12345678
/* let umaString = "Um texto";
console.log(`${umaString} EM UM LINDO DIA`); // Exibe todos elementos da string e permite usar as aspas e citar as suas variáveis.
console.log(umaString.indexOf("texto")); // Exibe o index[] de onde inicia a palavra texto.
console.log(umaString.lastIndexOf("t")); // Exibe o último "t" da string
console.log(umaString.match(/[a-z]/g)); // Exibe as letras minúsculas
console.log(umaString.search(/x/)); // Pesquisa exibe um valor
console.log(umaString.replace("Um", "outro")); // Substitui um texto da string por outra.
console.log(umaString.replace(/t/g, "#")); // Substitui uma caractere string por outra a flag "g" para todos os "t" sem, apenas o primeiro "t".
*/

let umaString = "O rato roeu a roupa do rei de roma.";
console.log(umaString.length);
console.log(umaString.slice(2 - 5));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());


// MAIS SOBRE STRNGS -- INDEXADAS

let umaStrings = `O rato roeu a roupa do rei de roma`;

console.log(umaStrings.);
