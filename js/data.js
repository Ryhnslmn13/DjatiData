// Preview link functionality - untuk semua link preview
document.addEventListener('DOMContentLoaded', function() {
    // Ambil semua link preview
    const previewLinks = document.querySelectorAll('.preview-text .blue');
    
    // Tambahkan event listener untuk setiap link
    previewLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            console.log('Preview link clicked:', this.getAttribute('href'));
            
            // Optional: Tambahkan loading animation atau tracking
            this.style.opacity = '0.7';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 200);
        });
        
        // Tambahkan hover effect tambahan jika diperlukan
        link.addEventListener('mouseenter', function() {
            console.log('Hovering over preview link');
        });
    });
});

// Search functionality (optional)
const searchInput = document.querySelector('.search-input');
const dataCards = document.querySelectorAll('.data-card');

if (searchInput) {
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        dataCards.forEach(function(card) {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const description = card.querySelector('.card-description').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
}