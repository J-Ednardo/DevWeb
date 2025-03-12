// Escreva uma funcao que recebe 2 numeros e retorne o maior deles

function maiorNumero (num1, num2) {
    num1 = Number(num1)
    num2  = Number(num2)
    let maior
    if (num1 > num2) {
        maior = num1
    } else {
        maior = num2
    }
    return maior
}

const rand1 = Math.floor(Math.random(1, 100) * 100)
const rand2 = Math.floor(Math.random(1, 100) * 100)
console.log(rand1)
console.log(rand2)
console.log('##')
console.log(maiorNumero(rand1, rand2))
