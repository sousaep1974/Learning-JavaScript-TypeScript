//MÉTODO SPLICE - podemos contralar adicionando ou removendo elementos do array
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// Remove dados do array a partir do índice 3, 2 elementos.

// A partir do índice 3, remove 2 elementos e adiciona os dois mencionados no final.
const removidos = nomes.splice(1, 0, 'Pedro', 'Rafael'); 
console.log(nomes, removidos)



