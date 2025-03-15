// Factory Function (funcao fabrica)

function criaPessoa (nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        altura,
        peso,
        
        fala(assunto = 'nada') {
            return `${this.nome} esta falando sobre ${assunto}`;
        },

        calculaImc() {
            const imc = this.peso / (this.altura ** 2);
            return imc.toFixed(2);
        },
        //getter
        get nomeCompleto() {
            return this.nome + ' ' + this.sobrenome
        },
        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }
    };
}

const p1 = criaPessoa('Ednardo', 'Dantas', 1.79, 70);
p1.nomeCompleto = 'Fernando Torres';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala('futebol'));
