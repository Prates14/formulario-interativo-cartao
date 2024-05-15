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
            //função referente ao arquivo 'enviado.js'
            formularioEnviado();
        }
    }

    //Validação de todos os campos do formulário
    camposValidos() {
        let valid = true;
        //removendo mensagens de erro
        for (const errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        //Validação geral dos campos
        for (const campo of document.querySelectorAll('.validar')) {
            campo.style.borderColor = 'hsl(270, 3%, 87%)';

            //validação de campos em geral
            if (!campo.value) {
                campo.style.borderColor = 'hsl(0, 100%, 66%)';
                this.criaError(campo, "Can't be blank.");
                valid = false;
            }
            //Validação do nome do cartao
            if (campo.id === 'cardholder') {
                if (!this.validarNome(campo)) valid = false;
            }
            //Validação do numero do cartao
            if (campo.id === 'num') {
                if (!this.validarNumero(campo)) valid = false;
            }
            //Validação do numero CVC
            if (campo.id === 'cvc') {
                if (!this.validarCvc(campo)) valid = false;
            }
            //Validação da data
            if (campo.id === 'dateMounth' || campo.id === 'dateYear') {
                if (!this.validarData(campo)) valid = false;
            }
        }

        return valid;
    }

    validarNome(campo) {
        let valid = true;
        const nome = campo.value;
        //conjunto e quantidade de caracteres
        if (!nome.match(/^[a-zA-ZÀ-ÿ]+(?:\s[a-zA-ZÀ-ÿ]+)*$/g)) {
            campo.style.borderColor = 'hsl(0, 100%, 66%)';
            this.criaError(campo, "Name cannot contain numbers and/or symbols");
            valid = false;
        }
        if (nome.length < 3 || nome.length > 30) {
            campo.style.borderColor = 'hsl(0, 100%, 66%)';
            this.criaError(campo, "Name must be between 3 and 30 characters long");
            valid = false;
        }
        return valid;
    }

    validarNumero(campo) {
        let valid = true;
        let numero = campo.value;
        numero = numero.replace(/\s/g, '');
        //conjunto e quantidade de caracteres
        if (numero.match(/\D/g)) {
            campo.style.borderColor = 'hsl(0, 100%, 66%)';
            this.criaError(campo, "Wrong format, numbers only");
            valid = false;
        }
        if (numero.length !== 16) {
            campo.style.borderColor = 'hsl(0, 100%, 66%)';
            this.criaError(campo, "Number must be 16 characters long");
            valid = false;
        }
        return valid;
    }

    validarData(campo) {
        let valid = true;
        const ano = document.querySelector('#dateYear');
        //validando existencia do ano no input
        if (!ano.value && campo.value) {
            campo.style.borderColor = 'hsl(0, 100%, 66%)';
            this.criaError(campo, "year can't be blank");
            valid = false;
        }
        return valid;
    }

    validarCvc(campo) {
        let valid = true;
        const cvc = campo.value;
        //conjunto e quantidade de caracteres
        if (cvc.match(/\D/g)) {
            campo.style.borderColor = 'hsl(0, 100%, 66%)';
            this.criaError(campo, "Wrong format, number only");
            valid = false;
        }
        if (cvc.length !== 3) {
            campo.style.borderColor = 'hsl(0, 100%, 66%)';
            this.criaError(campo, "Number must be 3 characters long");
            valid = false;
        }
        return valid;
    }


    //Funcao para representar o erro de cada input
    criaError(campo, errorText) {
        const div = document.createElement('p');
        div.innerHTML = errorText;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const validandoFormulario = new formulario();