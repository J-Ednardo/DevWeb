const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia']
// nomes.splice(indice, delete, elem1, elem2, elem3)
 
//pop
const removidos = nomes.splice(3, 1, 'Luiz');
console.log(nomes, removidos);

//shift
nomes.splice(0, 1)
console.log(nomes);

//push 
nomes.splice(nomes.length, 0, 'Luiz')
console.log(nomes);
