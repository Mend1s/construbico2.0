const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');
const menuItems = document.querySelectorAll('#menu a');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

function closeMenu() {
    nav.classList.remove('active');
    btnMobile.setAttribute('aria-expanded', 'false');
    btnMobile.setAttribute('aria-label', 'Abrir Menu');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Adicione ouvintes de evento para fechar o menu quando um item do menu for clicado
menuItems.forEach(item => {
    item.addEventListener('click', closeMenu);
});
