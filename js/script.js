// Hero slider functionality
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 5000); // Ganti gambar tiap 5 detik

// Fungsi untuk menandai menu navbar yang aktif
document.addEventListener('DOMContentLoaded', function() {
    // Dapatkan URL halaman saat ini
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Dapatkan semua nav-link
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Hapus class active dari semua nav-link
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Tambahkan class active berdasarkan halaman saat ini
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Periksa apakah href cocok dengan halaman saat ini
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html') ||
            href.includes(currentPage)) {
            link.classList.add('active');
        }
    });
    
    // Alternative method - jika method di atas tidak bekerja
    // Bisa gunakan ini sebagai fallback
    const pageMapping = {
        'index.html': 'Beranda',
        'dashboard.html': 'Dashboard', 
        'data.html': 'Data'
    };
    
    const currentPageName = pageMapping[currentPage];
    
    if (currentPageName) {
        navLinks.forEach(link => {
            if (link.textContent.trim() === currentPageName) {
                link.classList.add('active');
            }
        });
    }
});

// Optional: Smooth transition effect saat pindah halaman
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Tambahkan efek loading atau transisi jika diperlukan
        this.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});