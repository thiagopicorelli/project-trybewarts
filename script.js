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
  if (agreement.checked) {
    enviarform.disabled = false;
  } else {
    enviarform.disabled = true;
  }
}

/* Função que conta os caracteres dentro de uma textArea, decrementa do valor de caracteres máximo (maxLength) e exibe no Elemento html
   queryTextArea = querySelector de um texto no html
   queryDisplayElement = querySelector de uma tag onde será exibido o número de caracteres
*/
function charCounter(queryTextArea, queryDisplayElement) {
  const textArea = document.querySelector(queryTextArea);
  const displayCounter = document.querySelector(queryDisplayElement);
  const counter = textArea.value.length;

  displayCounter.textContent = Math.abs(counter - textArea.maxLength);
}

const commentTextArea = document.querySelector('#textarea');
commentTextArea.addEventListener('input', () => { charCounter('#textarea', '#counter'); });

agreement.addEventListener('click', toggleSubmit);

function showFormData() {
  form.style.display = 'none';
  formdata.style.display = 'block';
}

function addFormData(input, output) {
  document.getElementById(output).innerHTML = form.elements[input].value;
}

function addNomeFormData() {
  const inputNome = form.elements['input-name'].value;
  const inputSobrenome = form.elements['input-lastname'].value;
  const outNome = document.getElementById('out-nome');
  outNome.innerHTML = `${inputNome} ${inputSobrenome}`;
}

function addMateriaFormData() {
  const inputMaterias = document.getElementsByClassName('subject');
  const outMaterias = document.getElementById('out-materia');

  const materiasChecked = [];

  for (let i = 0; i < inputMaterias.length; i += 1) {
    if (inputMaterias[i].checked) {
      materiasChecked.push(inputMaterias[i].value);
    }
  }

  outMaterias.innerHTML = materiasChecked.join(', ');
}

function createForm() {
  showFormData();

  addNomeFormData();
  addFormData('input-email', 'out-email');
  addFormData('house', 'out-casa');
  addFormData('family', 'out-familia');
  addMateriaFormData();
  addFormData('rate', 'out-aval');
  addFormData('observacoes', 'out-obs');
}

enviarform.addEventListener('click', createForm);
