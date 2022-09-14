const agreement = document.getElementById('agreement');

function checarDados() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function toggleSubmit() {
  const enviarform = document.getElementById('submit-btn');

  if(agreement.checked) {
    enviarform.disabled = false;
  } else {
    enviarform.enabled = true;
  }

}

const enviar = document.getElementById('login-enviar');
enviar.addEventListener('click', checarDados);

agreement.addEventListener('click', toggleSubmit);
