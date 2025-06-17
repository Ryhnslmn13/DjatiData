document.querySelectorAll('.dashboard-card').forEach(card => {
    card.addEventListener('click', function(event) {
        event.preventDefault(); // mencegah link
        document.getElementById('accessModal').style.display = 'flex';
    });
});

// Klik di luar modal untuk menutup
window.addEventListener('click', function(e) {
    const modal = document.getElementById('accessModal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
});
