document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA PARA O MENU HAMBÚRGUER ---
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        // Alterna a classe 'active', que é usada pelo CSS para mostrar/esconder o menu
        navLinks.classList.toggle('active');
    });


    // --- ROLAGEM SUAVE PARA LINKS ÂNCORA ---
    // Esta função é uma alternativa mais robusta ao `scroll-behavior: smooth` do CSS
    // e garante funcionamento em mais navegadores.
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Esconde o menu mobile após clicar em um link
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });


    // --- ANIMAÇÃO FADE-IN AO ROLAR A PÁGINA ---
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element);
    });

});
