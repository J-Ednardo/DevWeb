const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otavio';
pessoa1.idade = 30,
pessoa1.falarNome = function() {
    return `${this.nome} esta falando seu nome`;
};
pessoa1.getDataNascimento = function() {
    const data = new Date();
    return data.getFullYear() - this.idade;
}

for (let chave in pessoa1){
    console.log(pessoa1[chave]);
}

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa('Luiz', 'Miranda');
p1.nome = 'Ednardo';
p1.sobrenome = 'Dantas';
console.log(p1);
