// Some todos os numeros (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const somaNumeros = numeros.reduce((acumulador, valor) => acumulador += valor);
const numerosPares = numeros.filter(valor => valor % 2 === 0);
const dobroNumeros = numeros.map(valor => valor * 2);
console.log(somaNumeros);
console.log(numerosPares);
console.log(dobroNumeros);

// Retorne a pessoa mais velhas
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 87},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade < valor.idade) {
        acumulador = valor;
    };
    return acumulador;
})

console.log(pessoaMaisVelha);
