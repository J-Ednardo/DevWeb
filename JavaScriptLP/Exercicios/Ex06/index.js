/*
 Escreva uma função chamada ePaisagem que recebe dois argumentos,
 largura e altura de uma imagem (number)
 Retorne true se a imagem estiver no modo paisagem
*/

function ehPaisagem (largura,altura) {
    largura = Number(largura)
    altura = Number(altura)
    
    if (largura >= altura) {
        return true
    } else {
        return false
    }
}

const ePaisagem = (largura, altura) => largura >= altura //arrow function

console.log(ehPaisagem(1080, 1920))
console.log('-----')
console.log(ePaisagem(1920, 1920))
