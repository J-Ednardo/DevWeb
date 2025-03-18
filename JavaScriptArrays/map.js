// Dobre os numeros
//


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
//console.log(numerosEmDobro);





// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id para cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const nomePessoas = pessoas.map(obj => obj.nome);
const idadePessoas = pessoas.map(obj => ({ idade: obj.idade }));
const idPessoas = pessoas.map( (obj, indice) => {
    const newObj = { ...obj };
    newObj.id = indice + 1;
    return newObj;
}) 
console.log(nomePessoas);
console.log(idadePessoas);
console.log(idPessoas);