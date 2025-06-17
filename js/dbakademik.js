// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Export PDF button functionality
        document.querySelector('.export-btn').addEventListener('click', function() {
            alert('Fungsi export PDF akan diimplementasikan sesuai kebutuhan');
        });

        // Mobile menu toggle (if needed)
        function toggleMobileMenu() {
            const nav = document.querySelector('.nav-menu');
            nav.classList.toggle('active');
        }

        // Chart placeholder click handler
        document.querySelectorAll('.chart-placeholder').forEach(placeholder => {
            placeholder.addEventListener('click', function() {
                alert('Klik di sini untuk mengganti dengan gambar grafik Anda');
            });
        });

        // Hover effects for cards
        document.querySelectorAll('.info-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.background = '#f0f2f5';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.background = '#f8f9fa';
            });
        });

        // Add loading animation
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });