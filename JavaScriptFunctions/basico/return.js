// return 
// retorna um valor
// termina a funcao

function criaMultiplicador(multiplicador) {
    //multiplicador
    return function multiplicacao(n) {
        return n * multiplicador
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(10))
console.log(triplica(10))
console.log(quadriplica(10))
