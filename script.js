// script.js

let currentIndex = 0;

function moveSlide(direction) {
    const cards = document.querySelectorAll('.project-card');
    const totalCards = cards.length;

    // Calculando o novo índice
    currentIndex = (currentIndex + direction + totalCards) % totalCards;

    // Movendo a posição dos cards
    const offset = -(currentIndex * 240); // 240px é a largura dos cards com margem
    document.querySelector('.cards-container').style.transform = `translateX(${offset}px)`;
}
