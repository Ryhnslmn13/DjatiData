document.addEventListener('DOMContentLoaded', () => {
    
    function setupCarousel(carouselId, cardsPerView) {
        const carousel = document.getElementById(carouselId);
        if (!carousel) return;

        const track = carousel.querySelector('.carousel-track');
        const cards = carousel.querySelectorAll('.card');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');

        if (!track || !prevButton || !nextButton || cards.length === 0) return;

        const totalCards = cards.length;
        let currentIndex = 0;
        
        // Calculate the number of possible "pages" or "slides"
        const totalPages = Math.ceil(totalCards / cardsPerView);

        function updateCarousel() {
            const cardWidth = track.clientWidth / cardsPerView;
            const offset = -currentIndex * cardWidth * cardsPerView;
            track.style.transform = `translateX(${offset}px)`;

            // Disable/Enable buttons
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex >= totalPages - 1;
        }
        
        nextButton.addEventListener('click', () => {
            if (currentIndex < totalPages - 1) {
                currentIndex++;
                updateCarousel();
            }
        });

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        // Initial setup
        updateCarousel();
    }

    // Initialize the carousels
    // The first carousel shows 3 cards at a time
    setupCarousel('grafik-carousel', 3); 
    // The second carousel shows 4 cards at a time
    setupCarousel('dashboard-carousel', 4);

});