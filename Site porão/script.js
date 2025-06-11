document.addEventListener('DOMContentLoaded', () => {

    // --- ROLAGEM SUAVE PARA LINKS ÂNCORA ---
    // Esta função é uma alternativa mais robusta ao `scroll-behavior: smooth` do CSS
    // e garante funcionamento em mais navegadores.
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previne o comportamento padrão de "pular" para a âncora
            e.preventDefault();

            // Pega o ID da seção de destino (ex: '#equipe')
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Alinha o topo da seção com o topo da tela
                });
            }
        });
    });


    // --- ANIMAÇÃO FADE-IN AO ROLAR A PÁGINA ---
    // Esta função observa quando um elemento entra na tela e aplica uma classe para animá-lo.
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // Observa em relação à viewport
        rootMargin: '0px',
        threshold: 0.1 // Ativa quando 10% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento está visível
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Para de observar o elemento para a animação não repetir
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Pede ao observador para "assistir" cada elemento com a classe .fade-in
    fadeInElements.forEach(element => {
        observer.observe(element);
    });

});