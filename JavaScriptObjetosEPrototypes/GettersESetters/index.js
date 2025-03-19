function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Valor invalido');
            }
            estoquePrivado = valor;

        }
    });
}

function criaProduto(nome){
    return {
        get nome () {
            return nome;
        },
        set nome (nome){
            nome = nome;
        }
    }
}

const p1 =  new Produto('Cadeira', 500, 5);
console.log(p1);
p1.estoque = 600
console.log(p1.estoque);
const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);
