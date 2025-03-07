const pessoa = {
    nome: 'Ednardo',
    sobrenome: 'Dantas',
    idade: 20,

    fala() {
        console.log(`Ola, meu nome eh ${this.nome}`)
    }
}

function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome,idade}
}



const pessoa1 = criaPessoa('Ednardo', 'Dantas', 20)
const pessoa2 = criaPessoa('Eduarda', 'Fernandes', 20)
const pessoa3 = criaPessoa('Joao', 'Dantas', 11)
const pessoa4 = criaPessoa('Lucas', 'Moura', 33)
pessoa.fala()
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome)