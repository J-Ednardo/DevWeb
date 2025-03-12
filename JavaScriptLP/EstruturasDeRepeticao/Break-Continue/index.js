const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {
    if (numero === 2){
        console.log('Pulei o numero 2...')
        continue
    }

    if (numero === 5) {
        console.log('Pulei o numero 5...')
        continue
    }

    console.log(numero)

    if (numero === 7) {
        console.log('O 7 foi encontrado, saindo...')
        break
    }
}

let i = 0
while (i < numeros.length) {
    if (numeros[i] === 2){
        console.log('Pulei o numero 2...')
        i++
        continue
    }

    if (numeros[i] === 5) {
        console.log('Pulei o numero 5...')
        i++
        continue
    }

    console.log(numeros[i])

    if (numeros[i] === 7) {
        console.log('O 7 foi encontrado, saindo...')
        i++
        break
    }
    i++    
}

// Continue continua para a proxima iteracao
// Break sai do laco
