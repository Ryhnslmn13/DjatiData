document.addEventListener('DOMContentLoaded', () => {
    // 1. Dropdown Tombol Download
    const downloadButton = document.querySelector('.download-button');
    let dropdownMenu = null; // To store the dropdown element

    const createDropdownMenu = () => {
        // Hapus dropdown yang sudah ada jika ada
        if (dropdownMenu) {
            dropdownMenu.remove();
        }

        dropdownMenu = document.createElement('div');
        dropdownMenu.classList.add('download-dropdown-menu');
        dropdownMenu.innerHTML = `
            <a href="#" data-format="csv">Download CSV</a>
            <a href="#" data-format="excel">Download Excel</a>
            <a href="#" data-format="pdf">Download PDF</a>
        `;
        
        // Append dropdown ke parent element yang sama dengan button (table-footer)
        downloadButton.parentElement.appendChild(dropdownMenu);

        // Event listener untuk pilihan download
        dropdownMenu.addEventListener('click', handleDownloadSelection);
    };

    const toggleDropdown = (event) => {
        event.stopPropagation(); // Prevent click from immediately closing it
        
        if (!dropdownMenu) {
            createDropdownMenu();
        }
        
        const isShowing = dropdownMenu.classList.contains('show');
        
        if (isShowing) {
            dropdownMenu.classList.remove('show');
            document.removeEventListener('click', closeDropdownOutside);
        } else {
            dropdownMenu.classList.add('show');
            document.addEventListener('click', closeDropdownOutside);
        }
    };

    const closeDropdownOutside = (event) => {
        if (dropdownMenu && 
            !dropdownMenu.contains(event.target) && 
            event.target !== downloadButton && 
            !downloadButton.contains(event.target)) {
            dropdownMenu.classList.remove('show');
            document.removeEventListener('click', closeDropdownOutside);
        }
    };

    const handleDownloadSelection = (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault(); // Prevent default link behavior
            event.stopPropagation(); // Stop event bubbling
            
            const format = event.target.dataset.format;
            alert(`Downloading dataset in ${format.toUpperCase()} format... (This is a placeholder)`);
            
            // Here you would typically trigger an actual file download
            // e.g., window.location.href = `/api/download-data?format=${format}`;
            
            // Close dropdown after selection
            dropdownMenu.classList.remove('show');
            document.removeEventListener('click', closeDropdownOutside);
        }
    };

    // Event listener untuk button download
    if (downloadButton) {
        downloadButton.addEventListener('click', toggleDropdown);
    }

    // 2. Menandai Navigasi Aktif
    const navLinks = document.querySelectorAll('.nav-menu .nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        // Remove 'active' from all links first
        link.classList.remove('active');

        // Check if the link's href matches the current path
        const linkPath = new URL(link.href).pathname;
        
        // Untuk halaman data mahasiswa fakultas
        if (currentPath.includes('data-mhs-fk.html') && linkPath.includes('data.html')) {
            link.classList.add('active');
        }
        // Untuk halaman lainnya
        else if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });

    // 3. Close dropdown ketika window di-resize
    window.addEventListener('resize', () => {
        if (dropdownMenu && dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
            document.removeEventListener('click', closeDropdownOutside);
        }
    });

    // 4. Close dropdown dengan tombol Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && dropdownMenu && dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
            document.removeEventListener('click', closeDropdownOutside);
        }
    });
});