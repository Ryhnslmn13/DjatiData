document.addEventListener('DOMContentLoaded', function() {
            const downloadButton = document.getElementById('downloadButton');
            const downloadDropdown = document.getElementById('downloadDropdown');

            // Download button functionality
            downloadButton.addEventListener('click', function(e) {
                e.stopPropagation();
                const isOpen = downloadDropdown.classList.contains('show');
                
                if (isOpen) {
                    downloadDropdown.classList.remove('show');
                    downloadButton.classList.remove('open');
                } else {
                    downloadDropdown.classList.add('show');
                    downloadButton.classList.add('open');
                }
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!downloadButton.contains(e.target) && !downloadDropdown.contains(e.target)) {
                    downloadDropdown.classList.remove('show');
                    downloadButton.classList.remove('open');
                }
            });

            // Handle download format selection
            downloadDropdown.addEventListener('click', function(e) {
                if (e.target.tagName === 'A') {
                    e.preventDefault();
                    const format = e.target.dataset.format;
                    const selectedFaculty = facultySelect.value;
                    alert(`Downloading ${facultyData[selectedFaculty].name} data in ${format.toUpperCase()} format...`);
                    downloadDropdown.classList.remove('show');
                    downloadButton.classList.remove('open');
                }
            });

            // Handle escape key to close dropdown
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && downloadDropdown.classList.contains('show')) {
                    downloadDropdown.classList.remove('show');
                    downloadButton.classList.remove('open');
                }
            });
        });