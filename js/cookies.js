const botao = document.getElementById('aceitar-cookie');
const elemento = document.getElementById('cookie-div');
const audio = document.getElementById('index-song');

botao.addEventListener('click', () => {
  elemento.style.display = 'none';
  audio.play();
});