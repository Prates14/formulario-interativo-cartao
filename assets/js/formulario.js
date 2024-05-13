class formulario {
    constructor() {
        this.form = document.querySelector('.formulario');
        this.evento();
    }

    evento() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    //Condição para envio do formulário
    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposValidos();
        if (camposValidos === true) {
            alert('Formulário enviado!');
            this.form.submit();
        }
    }

    //Validação de todos os campos do formulário
    camposValidos() {
        let valid = true;

        for(const errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        //Validação geral dos campos
        for (const campo of document.querySelectorAll('.validar')) {
            if (!campo.value) {
                this.criaError(campo, "Can't be blank.");
                valid = false;
            }
            //Validação do nome do cartao
            // if (campo.id === 'cardholher') {
            //     if (!this.validarNome(campo)) valid = false;
            // }
            // //Validação do numero do cartao
            // if (campo.id === 'num') {
            //     if (!this.validarNumero(campo)) valid = false;
            // }
            // //Validação do mês
            // if (campo.id === 'date-mounth') {
            //     if (!this.validarMes(campo)) valid = false;
            // }
            // //Validação do ano
            // if (campo.id === 'date-year') {
            //     if (!this.validarAno(campo)) valid = false;
            // }
            // //Validação do numero CVC
            // if (campo.id === 'cvc') {
            //     if (!this.validarCvc(campo)) valid = false;
            // }
        }

        return valid;
    }

    criaError(campo, errorText) {
        const div = document.createElement('p');
        div.innerHTML = errorText;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const validandoFormulario = new formulario();