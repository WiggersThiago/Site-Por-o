document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-hamburguer');
    const navMenu = document.querySelector('.menu-navegacao');

    // Só executa o código do menu se o botão existir nesta página
    if (menuButton) {
        menuButton.addEventListener('click', function () {
            const isOpened = menuButton.getAttribute('aria-expanded') === 'true';
            
            // Adiciona/remove a classe no body para controlar o estado do menu
            document.body.classList.toggle('menu-aberto');
            
            // Atualiza o atributo de acessibilidade
            menuButton.setAttribute('aria-expanded', !isOpened);
        });

        // Fecha o menu se um link for clicado
        navMenu.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                document.body.classList.remove('menu-aberto');
                menuButton.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Animação de Fade-in para seções (continua igual)
    const fadeInElements = document.querySelectorAll('.fade-in');
    if (fadeInElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
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
    }
});