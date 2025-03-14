// arguments que sustenta todos os argumentos enviados
function funcao() {
    let total = 0;
    for (let argumento of arguments){
        total += argumento
    }

    console.log(total)
}

function funcao2 (a, b, c, d, e, f){
    console.log(a, b, c, d, e, f)
}

function soma(a = 0, b = 0) {
    console.log(a + b)
}

function conta(operador, acumulador, ...numeros){
    for (let numero of numeros) {
        if(operador === '+') acumulador += numero
        if(operador === '-') acumulador -= numero
        if(operador === '/') acumulador /= numero
        if(operador === '*') acumulador *= numero
    }
    console.log(acumulador)
}

conta('-', 1, 20, 30, 40, 50)
