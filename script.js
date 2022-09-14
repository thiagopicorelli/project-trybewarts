function checarDados() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if(email === 'tryber@teste.com' && password === '123456') {
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
}

const enviar = document.getElementById("login-enviar");
enviar.addEventListener("click", checarDados);