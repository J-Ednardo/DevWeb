// Global
//Closures: habilidade que a funcao tem de acessar seu excopo
function retornaFuncao (nome) {
    return function () {
        return nome
    }
}

const funcao = retornaFuncao('luiz')
const funcao2 = retornaFuncao('Ednardo')

console.log(funcao)
console.log(funcao2)
