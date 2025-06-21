// Data untuk setiap fakultas
        const facultyData = {
            'FST': {
                name: 'Fakultas Sains dan Teknologi',
                programs: [
                    { name: 'Teknik Informatika', akreditasi: 'UNGGUL' },
                    { name: 'Teknik Elektro', akreditasi: 'BAIK SEKALI' },
                    { name: 'Fisika', akreditasi: 'UNGGUL' },
                    { name: 'Matematika', akreditasi: 'UNGGUL' },
                    { name: 'Biologi', akreditasi: 'UNGGUL' },
                    { name: 'Kimia', akreditasi: 'UNGGUL' },
                    { name: 'Agroteknologi', akreditasi: 'BAIK SEKALI' }
                ]
            },
            'FTK': {
                name: 'Fakultas Tarbiyah dan Keguruan',
                programs: [
                    { name: 'Pendidikan Agama Islam', akreditasi: 'UNGGUL' },
                    { name: 'Manajemen Pendidikan Islam', akreditasi: 'B' },
                    { name: 'Pendidikan Guru Madrasah Ibtidaiyah (PGMI)', akreditasi: 'A' },
                    { name: 'Pendidikan Islam Anak Usia Dini (PIAUD)', akreditasi: 'UNGGUL' },
                    { name: 'Tadris Bahasa Indonesia', akreditasi: 'BAIK' },
                    { name: 'Pendidikan Bahasa Inggris', akreditasi: 'UNGGUL' },
                    { name: 'Pendidikan Bahasa Arab', akreditasi: 'A' },
                    { name: 'Pendidikan Matematika', akreditasi: 'UNGGUL' },
                    { name: 'Pendidikan Fisika', akreditasi: 'B' },
                    { name: 'Pendidikan Kimia', akreditasi: 'A' },
                    { name: 'Pendidikan Biologi', akreditasi: 'B' },
                    
                ]
            },
            'FAD': {
                name: 'Fakultas Adab dan Humaniora',
                programs: [
                    { name: 'Bahasa dan Sastra Arab', akreditasi: 'UNGGUL' },
                    { name: 'Sastra Inggris', akreditasi: 'UNGGUL' },
                    { name: 'Sejarah dan Kebudayaan Islam', akreditasi: 'UNGGUL' },
                    { name: 'Ilmu Perpustakaan dan Informasi Islam', akreditasi: 'BAIK' },
                ]
            },
            'FSH': {
                name: 'Fakultas Syariah dan Hukum',
                programs: [
                    { name: 'Hukum Keluarga (Ahwal Syakhshiyyah)', akreditasi: 'A' },
                    { name: 'Hukum Ekonomi Syariah (Muamalah)', akreditasi: 'A' },
                    { name: 'Hukum Pidana Islam (Jinayah)', akreditasi: 'UNGGUL' },
                    { name: 'Perbandingan Mazhab', akreditasi: 'A' },
                    { name: 'Hukum Tata Negara', akreditasi: 'A' },
                    { name: 'Ilmu Hukum', akreditasi: 'A' },
                ]
            },
            'FPS': {
                name: 'Fakultas Psikologi',
                programs: [
                    { name: 'Psikologi', akreditasi: 'B' }
                ]
            },
            'FISIP': {
                name: 'Fakultas Ilmu Sosial dan Ilmu Politik',
                programs: [
                    { name: 'Sosiologi', akreditasi: 'UNGGUL' },
                    { name: 'Ilmu Politik', akreditasi: 'BAIK' },
                    { name: 'Administrasi Publik', akreditasi: 'UNGGUL' },
                ]
            },
            'FU': {
                name: 'Fakultas Ushuluddin',
                programs: [
                    { name: 'Aqidah dan Filsafat Islam', akreditasi: 'A' },
                    { name: 'Studi Agama-Agama', akreditasi: 'B' },
                    { name: 'Ilmu Al-Qur\'an dan Tafsir', akreditasi: 'UNGGUL'},
                    { name: 'Ilmu Hadits', akreditasi: 'B' },
                    { name: 'Tasawuf dan Psikoterapi', akreditasi: 'B' }
                ]
            },
            'FDK': {
                name: 'Fakultas Dakwah dan Komunikasi',
                programs: [
                    { name: 'Komunikasi dan Penyiaran Islam', akreditasi: 'UNGGUL' },
                    { name: 'Bimbingan dan Konseling Islam', akreditasi: 'UNGGUL' },
                    { name: 'Pengembangan Masyarakat Islam', akreditasi: 'UNGGUL' },
                    { name: 'Manajemen Dakwah', akreditasi: 'UNGGUL' },
                    { name: 'Manajemen Haji dan Umrah', akreditasi: 'BAIK' },
                    { name: 'Ilmu Komunikasi', akreditasi: 'UNGGUL' }
                ]
            },
            'FEBI': {
                name: 'Fakultas Ekonomi dan Bisnis Islam',
                programs: [
                    { name: 'Akuntansi Syariah', akreditasi: 'B' },
                    { name: 'Ekonomi Syariah', akreditasi: 'B' },
                    { name: 'Manajemen', akreditasi: 'BAIK SEKALI' },
                    { name: 'Manajemen Keuangan Syariah', akreditasi: 'UNGGUL' }
                ]
            }
        };

        // Function to update table based on selected faculty
        function updateTable(selectedFaculty) {
            const tableBody = document.getElementById('tableBody');
            const data = facultyData[selectedFaculty];
            
            if (!data) return;

            // Clear existing rows
            tableBody.innerHTML = '';

            // Add rows for each program in the selected faculty
            data.programs.forEach(program => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${data.name}</td>
                    <td>Sarjana</td>
                    <td>${program.name}</td>
                    <td>${program.akreditasi}</td>
                    <td>25/05/25 19.00</td>
                `;
                tableBody.appendChild(row);
            });
        }

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            const facultySelect = document.getElementById('facultySelect');
            const facultyDropdown = document.getElementById('facultyDropdown');
            const downloadButton = document.getElementById('downloadButton');
            const downloadDropdown = document.getElementById('downloadDropdown');

            // Initialize table with default faculty (FST)
            updateTable('FST');

            // Handle faculty selection change
            facultySelect.addEventListener('change', function() {
                updateTable(this.value);
            });

            // Handle faculty dropdown icon animation
            facultySelect.addEventListener('focus', function() {
                facultyDropdown.classList.add('open');
            });

            facultySelect.addEventListener('blur', function() {
                facultyDropdown.classList.remove('open');
            });

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