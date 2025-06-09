document.addEventListener('DOMContentLoaded', () => {
    // 1. Dropdown Tombol Download
    const downloadButton = document.querySelector('.download-button');
    let dropdownMenu = null; // To store the dropdown element

    const createDropdownMenu = () => {
        dropdownMenu = document.createElement('div');
        dropdownMenu.classList.add('download-dropdown-menu');
        dropdownMenu.innerHTML = `
            <a href="#" data-format="csv">Download CSV</a>
            <a href="#" data-format="excel">Download Excel</a>
            <a href="#" data-format="pdf">Download PDF</a>
        `;
        // Append it near the button, or at the end of body for absolute positioning
        downloadButton.parentNode.insertBefore(dropdownMenu, downloadButton.nextSibling);

        // Position the dropdown below the button
        const buttonRect = downloadButton.getBoundingClientRect();
        dropdownMenu.style.position = 'absolute';
        dropdownMenu.style.top = `${buttonRect.bottom + 5}px`; // 5px below button
        dropdownMenu.style.left = `${buttonRect.left}px`;
        dropdownMenu.style.minWidth = `${buttonRect.width}px`; // Match button width
        dropdownMenu.style.zIndex = '1000'; // Ensure it's on top
    };

    const toggleDropdown = (event) => {
        event.stopPropagation(); // Prevent click from immediately closing it
        if (!dropdownMenu) {
            createDropdownMenu();
        }
        dropdownMenu.classList.toggle('show');

        // Close dropdown if clicked outside
        if (dropdownMenu.classList.contains('show')) {
            document.addEventListener('click', closeDropdownOutside);
            dropdownMenu.addEventListener('click', handleDownloadSelection); // Handle clicks inside dropdown
        } else {
            document.removeEventListener('click', closeDropdownOutside);
            dropdownMenu.removeEventListener('click', handleDownloadSelection);
        }
    };

    const closeDropdownOutside = (event) => {
        if (dropdownMenu && !dropdownMenu.contains(event.target) && event.target !== downloadButton) {
            dropdownMenu.classList.remove('show');
            document.removeEventListener('click', closeDropdownOutside);
            dropdownMenu.removeEventListener('click', handleDownloadSelection);
        }
    };

    const handleDownloadSelection = (event) => {
        if (event.target.tagName === 'A') {
            event.preventDefault(); // Prevent default link behavior
            const format = event.target.dataset.format;
            alert(`Downloading dataset in ${format.toUpperCase()} format... (This is a placeholder)`);
            // Here you would typically trigger an actual file download
            // e.g., window.location.href = `/api/download-data?format=${format}`;
            dropdownMenu.classList.remove('show'); // Close dropdown after selection
        }
    };

    if (downloadButton) {
        downloadButton.addEventListener('click', toggleDropdown);
    }

    // 2. Menandai Navigasi Aktif
    const navLinks = document.querySelectorAll('.nav-links ul li a');
    const currentPath = window.location.pathname; // e.g., /data-fakultas.html

    navLinks.forEach(link => {
        // Remove 'active' from all links first
        link.classList.remove('active');

        // Check if the link's href matches the current path (or a relevant part)
        // For 'data-fakultas.html', we check if the path contains 'data-fakultas'
        // or if its innerText is 'Data' and it's linked to this page.
        if (link.href.includes('data-mhs-fk.html') || (link.innerText === 'Data' && currentPath.includes('data-fakultas'))) {
            link.classList.add('active');
        }
        // If you have a specific home page like index.html, you can add:
        // if (link.href.includes('index.html') && currentPath === '/' || currentPath.includes('index.html')) {
        //     link.classList.add('active');
        // }
    });
});