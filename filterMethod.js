// FILTER, MAP, REDUCE

/* const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados); */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callBackFilter(valor, indice, array) {
  if (valor >= 11) {
    return true;
  } else {
    return false;
  }
}

const numerosFiltrados = numeros.filter(callBackFilter);
console.log(numerosFiltrados);
