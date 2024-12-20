// script.js
document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const cardsContainer = document.querySelector('.cards-container');
    const cards = document.querySelectorAll('.project-card');

    let scrollAmount = 0;
    const cardWidth = cards[0].offsetWidth + 20; // Inclui a margem entre os cards

    // Função para mover os cards para a direita
    nextBtn.addEventListener('click', function() {
        // Verifica se ainda há espaço para rolar
        if (scrollAmount < cardsContainer.scrollWidth - cardsContainer.clientWidth) {
            scrollAmount += cardWidth;
            cardsContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        } else {
            // Se chegou ao final, volta para o início para criar o loop infinito
            scrollAmount = 0;
            cardsContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    });

    // Função para mover os cards para a esquerda
    prevBtn.addEventListener('click', function() {
        // Verifica se ainda há espaço para rolar para a esquerda
        if (scrollAmount > 0) {
            scrollAmount -= cardWidth;
            cardsContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        } else {
            // Se chegou ao início, vai para o final para criar o loop infinito
            scrollAmount = cardsContainer.scrollWidth - cardsContainer.clientWidth;
            cardsContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    });
});
