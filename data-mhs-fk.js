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
        // Append it as a child of the .table-footer, which has position: relative;
        // This is key for relative positioning.
        downloadButton.parentNode.appendChild(dropdownMenu); // Appends dropdown to .table-footer

        // No need for absolute positioning calculations based on buttonRect if parent is relative
        // Instead, we position it relative to its parent (.table-footer)
        // Adjust these CSS properties to position it correctly relative to its parent.
        dropdownMenu.style.position = 'absolute'; // Keep absolute relative to parent
        dropdownMenu.style.top = '100%'; // Position above the button, or 0 to be at bottom of footer
        dropdownMenu.style.right = '0';    // Align to the right of the button
        dropdownMenu.style.transform = 'translateY(5px)'; // Adjust for small gap above button
        dropdownMenu.style.minWidth = `${downloadButton.offsetWidth}px`; // Match button width
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
            alert(`Downloading dataset in ${format.toUpperCase()} format...`);
            // Here you would typically trigger an actual file download
            // e.g., window.location.href = `/api/download-data?format=${format}`;
            dropdownMenu.classList.remove('show'); // Close dropdown after selection
        }
    };

    if (downloadButton) {
        downloadButton.addEventListener('click', toggleDropdown);
    }
});