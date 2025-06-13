document.addEventListener('DOMContentLoaded', () => {

    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const menuNavegacao = document.querySelector('.menu-navegacao');

    // Lógica do menu só é aplicada se os elementos existirem na página
    if (menuHamburguer && menuNavegacao) {
        menuHamburguer.addEventListener('click', () => {
            menuNavegacao.classList.toggle('ativo');
            menuHamburguer.classList.toggle('ativo');
        });
    }
    
    // Animação de Fade-in para seções
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});
