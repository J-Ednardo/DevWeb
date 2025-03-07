function meuEscopo() {
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado")
    const arrayObjetos = []

    function criarPessoa(nome, sobrenome, peso, altura) {
        return {
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        }
    }
    
    function recebeEventoForm (evento) {
        evento.preventDefault()
        
        const nome = form.querySelector(".nome")
        const sobrenome = form.querySelector(".sobrenome")
        const peso = form.querySelector(".peso")
        const altura = form.querySelector(".altura")
        
        const pessoa = criarPessoa(nome.value, sobrenome.value, peso.value, altura.value)
        resultado.innerHTML += `${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura}<br>`
        arrayObjetos.push(pessoa)
        console.log(arrayObjetos)
        
    }
    
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo()
