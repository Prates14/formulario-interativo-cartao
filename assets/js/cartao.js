//Interação com a página. Atualizando dinamicamente as informações no cartão
function updateCard() {
    let nome = document.querySelector('#cardholder').value || 'Jade Appleseed';
    let numero = document.querySelector('#num').value;
    let mes = document.querySelector('#dateMounth').value || '00';
    let ano = document.querySelector('#dateYear').value || '00';
    let cvc = document.querySelector('#cvc').value || '000';
    let data = `${mes}/${ano}`;

    document.querySelector('#val-num').textContent = numeroFormatado(numero) || '0000 0000 0000 0000';
    document.querySelector('#val-nome').textContent = nome;
    document.querySelector('#val-data').textContent = data;
    document.querySelector('#val-cvc').textContent = cvc;
    document.querySelector('#num').value = numeroFormatado(numero);
}

//Formatação do número do cartão
function numeroFormatado(val) {
    val = val.replace(/\s/g, '');

    if (val.length <= 4) {
        return `${val}`;
    } else if (val.length <= 8) {
        return `${val.slice(0, 4)} ${val.slice(4, 8)}`;
    } else if (val.length <= 12) {
        return `${val.slice(0, 4)} ${val.slice(4, 8)} ${val.slice(8, 12)}`;
    } else {
        return `${val.slice(0, 4)} ${val.slice(4, 8)} ${val.slice(8, 12)} ${val.slice(12, 16)}`;
    }
}