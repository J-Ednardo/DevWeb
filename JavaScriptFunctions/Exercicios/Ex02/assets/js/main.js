// Exercicio 01, mas utilizando uma funcao contrutora
function Calculadora() {
    this.display = document.querySelector('.visor');
    
    this.inicia = () => {
        this.cliqueBotoes();
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => {
            const el = e.target; // el = elemento

            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                this.apagaUm();
            }

            if (el.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        });
    };

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert('Conta inválida');
                return;
            }
            this.display.value = conta
        } catch (e) {
            alert('Conta inválida');
            return;
        }
    };
};


const calculadora = new Calculadora();
calculadora.inicia();
