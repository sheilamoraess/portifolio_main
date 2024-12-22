document.addEventListener("DOMContentLoaded", () => {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const cardsContainer = document.querySelector(".cards-container");
    const cards = document.querySelectorAll(".project-card");
    const totalCards = cards.length;
    let currentIndex = 0;

    // Função para mover o carrossel
    function moveCarousel(direction) {
        if (direction === -1) {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = totalCards - 1;
            }
        } else if (direction === 1) {
            currentIndex++;
            if (currentIndex >= totalCards) {
                currentIndex = 0;
            }
        }
        updateCarouselPosition();
    }

    // Função para atualizar a posição do carrossel
    function updateCarouselPosition() {
        const cardWidth = document.querySelector(".project-card").offsetWidth;
        cardsContainer.style.transform = `translateX(-${currentIndex * (cardWidth + 20)}px)`; // 20px é o gap entre os cards
    }

    prevButton.addEventListener("click", () => moveCarousel(-1));
    nextButton.addEventListener("click", () => moveCarousel(1));

    // Inicializa a posição do carrossel
    updateCarouselPosition();
});
