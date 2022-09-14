function checarDados() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

<<<<<<< HEAD
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
=======
    if(email === 'tryber@teste.com' && password === '123456') {
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
>>>>>>> 19541f360903826441c37158975a4d5070023bcb
}

const enviar = document.getElementById('login-enviar');
enviar.addEventListener('click', checarDados);
