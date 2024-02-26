const btnNovoUsuario = document.querySelector('#novo-usuario');
const btnLogin = document.querySelector('#login');

function selecionaLink(event) {
    event.preventDefault()

    btnLogin.classList.remove('selected');
    btnNovoUsuario.classList.add('selected');

    window.location.href = btnLogin.getAttribute('href');
    window.location.href = btnNovoUsuario.getAttribute('href');
}

