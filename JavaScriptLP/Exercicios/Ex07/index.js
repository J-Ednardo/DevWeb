/*
Escreva uma função que recebe um número e retorne o seguinte
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisivel por 3 e 5 = FizzBuzz
Número não é divisível por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um número
Use a função com números de 0 a 100
*/

const divPorTresECinco = (num) => {
    if (typeof num === 'number') {
        if (num % 3 === 0 && num % 5 === 0) {
            return 'FizzBuzz'
        } else if ( num % 3 === 0 ) {
            return 'Fizz'
        } else if(num % 5 === 0) {
            return 'Buzz'
        } else {
            return num
        }
    } else {
        return num
    }
}

let i = 0
while (i <= 100) {
    console.log(i, divPorTresECinco(i))
    i++
}

console.log(divPorTresECinco('Ola mundo'))
