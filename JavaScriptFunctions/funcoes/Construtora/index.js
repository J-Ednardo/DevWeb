// Funcao construtora -> Objetos
// Construtora -> Pessoa (new)

function Pessoa (nome, sobrenome) {
    // Atributos ou metodos privados
    const Id = 1234556
    const medotoInterno = () => {
        Id = Id
    }
    // Atributos ou metodos publicos
    this.nome = nome
    this.sobrenome = sobrenome
}