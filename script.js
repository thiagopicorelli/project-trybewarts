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
    enviarform.disabled = true;
  }

}


const enviar = document.getElementById('login-enviar');
enviar.addEventListener('click', checarDados);

agreement.addEventListener('click', toggleSubmit);


/* Função que conta os caracteres dentro de uma textArea, decrementa do valor de caracteres máximo (maxLength)e exibe Elemento html
   queryTextArea = querySelector de um texto no html
   queryDisplayElement = querySelector de uma tag onde será exibido o número de caracteres
*/
function charCounter(queryTextArea, queryDisplayElement) {
  let textArea = document.querySelector(queryTextArea);
  let displayCounter = document.querySelector(queryDisplayElement);
  let counter = textArea.value.length;

  displayCounter.textContent = Math.abs(counter - textArea.maxLength);
  console.log("feito +", displayCounter.innerhtml)
}


const commentTextArea = document.querySelector('#textarea');
commentTextArea.addEventListener('input', function() {
  charCounter('#textarea', '#counter');
});