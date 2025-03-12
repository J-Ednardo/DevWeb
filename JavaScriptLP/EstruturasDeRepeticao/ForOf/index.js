const nomes = ["Ednardo Dantas", 'Maria Eduarda', 'Joao Miguel', 'Mairton Silva', 'Paula Katiana']

for (let i of nomes){
    console.log(i) //retorna o valor, nao o indice
}

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array)
})
