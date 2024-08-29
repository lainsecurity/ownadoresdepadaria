const button = document.getElementById('hamburger-button');
const div = document.getElementById('dropdown-menu');

button.addEventListener('click', () => {
    div.classList.toggle('active');
});