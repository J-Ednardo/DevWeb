// definePropety - definePropeties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable: true
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, //valor da chave
            writable: true, // pode alterar o valor, ou nao
            configurable: true // pode apagar a chave/reconfigurar a chave
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, //valor da chave
            writable: true, // pode alterar o valor, ou nao
            configurable: true // pode apagar a chave/reconfigurar a chave
        },
    });
}

const p1 = new Produto('Cadeira', 500, 4);
console.log(Object.keys(p1));

for(let chave in p1){
    console.log(chave);
}
