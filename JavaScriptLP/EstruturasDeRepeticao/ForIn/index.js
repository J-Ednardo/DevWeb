const pessoa = {
    nome: 'Ednardo',
    sobrenome: 'Dantas',
    idade: 20
}

const frutas = ['Pera', 'Maca', 'Uva']

for (let chaves in pessoa) {
    console.log(`${chaves}: ${pessoa[chaves]}`)
}
