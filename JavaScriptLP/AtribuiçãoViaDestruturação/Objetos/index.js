const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}

//Atribuicao via desestruturacao
const { nome, sobrenome, idade } = pessoa
const { endereco: {rua, numero} } = pessoa
console.log(nome, sobrenome, idade)
