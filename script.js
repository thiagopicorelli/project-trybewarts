const enviar = document.getElementById('login-enviar');
const form = document.getElementById('evaluation-form');

const agreement = document.getElementById('agreement');
const enviarform = document.getElementById('submit-btn');
const formdata = document.getElementById('form-data');

function checarDados() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

enviar.addEventListener('click', checarDados);

function toggleSubmit() {
  if(agreement.checked) {
    enviarform.disabled = false;
  } else {
    enviarform.disabled = true;
  }

}

agreement.addEventListener('click', toggleSubmit);

function showFormData() {
  form.style.display = 'none';
  formdata.style.display = 'block';
}

function createForm() {
  showFormData();

  const inputnome = form.elements['input-name'].value;
  const inputsobrenome = form.elements['input-lastname'].value;
  const outnome = document.getElementById('out-nome');

  outnome.innerHTML = `${inputnome} ${inputsobrenome}`;
}

enviarform.addEventListener('click', createForm);
