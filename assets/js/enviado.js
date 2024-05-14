function formularioEnviado() {
    const newHtml = `
        <div class="completed-box">
            <img src="assets/images/icon-complete.svg" alt="Completed">
            <h2>THANK YOU!</h2>
            <p>We've added your card details</p>
        </div>
        <div class="continue">
            <button onclick="location.reload()">Continue</button>
        </div>
    `;

    document.querySelector('.formulario').remove();
    document.querySelector('.form-box').innerHTML = newHtml;
}