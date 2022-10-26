const numero = Number(prompt("Digite um número:"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");
numeroTitulo.innerHTML = numero;

let raizQuadrada = Math.sqrt(numero);
let inteiro = Number.isInteger(numero);
let numeroNaN = Number.isNaN(numero);
let arredAbaixo = Math.floor(numero);
let arredAcima = Math.ceil(numero);
let duasCasaDecimal = numero.toFixed(2);


texto.innerHTML = (`
<p>Raiz quadrada de seu número é: ${raizQuadrada}. 
<p> <p>Seu número é um inteiro: ${inteiro}. 
<p> <p>Seu número é um NaN: ${numeroNaN}. <p>
<p>Seu número arredondado para baixo: ${arredAbaixo}. <p>
<p>Seu número arredondado para cima: ${arredAcima}. <p>
<p>Seu número com duas casas decimais: ${duasCasaDecimal}. <p>

`);