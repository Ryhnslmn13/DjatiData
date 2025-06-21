// Data untuk setiap fakultas
        const facultyData = {
            'FST': {
                name: 'Fakultas Sains dan Teknologi',
                total: 1800,
                programs: [
                    { name: 'Teknik Informatika', students: 300 },
                    { name: 'Teknik Elektro', students: 250 },
                    { name: 'Fisika', students: 250 },
                    { name: 'Matematika', students: 250 },
                    { name: 'Biologi', students: 250 },
                    { name: 'Kimia', students: 250 },
                    { name: 'Agroteknologi', students: 250 }
                ]
            },
            'FTK': {
                name: 'Fakultas Tarbiyah dan Keguruan',
                total: 3550,
                programs: [
                    { name: 'Pendidikan Agama Islam', students: 400 },
                    { name: 'Manajemen Pendidikan Islam', students: 400 },
                    { name: 'Pendidikan Guru Madrasah Ibtidaiyah (PGMI)', students: 400 },
                    { name: 'Pendidikan Islam Anak Usia Dini (PIAUD)', students: 300 },
                    { name: 'Tadris Bahasa Indonesia', students: 350 },
                    { name: 'Pendidikan Bahasa Inggris', students: 350 },
                    { name: 'Pendidikan Bahasa Arab', students: 250 },
                    { name: 'Pendidikan Matematika', students: 400 },
                    { name: 'Pendidikan Fisika', students: 250 },
                    { name: 'Pendidikan Kimia', students: 250 },
                    { name: 'Pendidikan Biologi', students: 200 },
                    
                ]
            },
            'FAD': {
                name: 'Fakultas Adab dan Humaniora',
                total: 1100,
                programs: [
                    { name: 'Bahasa dan Sastra Arab', students: 200 },
                    { name: 'Sastra Inggris', students: 500 },
                    { name: 'Sejarah dan Kebudayaan Islam', students: 200 },
                    { name: 'Ilmu Perpustakaan dan Informasi Islam', students: 200 },
                ]
            },
            'FSH': {
                name: 'Fakultas Syariah dan Hukum',
                total: 1300,
                programs: [
                    { name: 'Hukum Keluarga (Ahwal Syakhshiyyah)', students: 250 },
                    { name: 'Hukum Ekonomi Syariah (Muamalah)', students: 250 },
                    { name: 'Hukum Pidana Islam (Jinayah)', students: 200 },
                    { name: 'Perbandingan Madzhab', students: 150 },
                    { name: 'Hukum Tata Negara', students: 150 },
                    { name: 'Ilmu Hukum', students: 300 },
                ]
            },
            'FPS': {
                name: 'Fakultas Psikologi',
                total: 800,
                programs: [
                    { name: 'Psikologi', students: 800 }
                ]
            },
            'FISIP': {
                name: 'Fakultas Ilmu Sosial dan Ilmu Politik',
                total: 1700,
                programs: [
                    { name: 'Sosiologi', students: 400 },
                    { name: 'Ilmu Politik', students: 600 },
                    { name: 'Administrasi Publik', students: 700 },
                ]
            },
            'FU': {
                name: 'Fakultas Ushuluddin',
                total: 980,
                programs: [
                    { name: 'Aqidah dan Filsafat Islam', students: 200 },
                    { name: 'Studi Agama-Agama', students: 180 },
                    { name: 'Ilmu Al-Qur\'an dan Tafsir', students: 200 },
                    { name: 'Ilmu Hadits', students: 200 },
                    { name: 'Tasawuf dan Psikoterapi', students: 200 }
                ]
            },
            'FDK': {
                name: 'Fakultas Dakwah dan Komunikasi',
                total: 1400,
                programs: [
                    { name: 'Komunikasi dan Penyiaran Islam', students: 300 },
                    { name: 'Bimbingan dan Konseling Islam', students: 250 },
                    { name: 'Pengembangan Masyarakat Islam', students: 200 },
                    { name: 'Manajemen Dakwah', students: 250 },
                    { name: 'Manajemen Haji dan Umrah', students: 200 },
                    { name: 'Ilmu Komunikasi', students: 200 }
                ]
            },
            'FEBI': {
                name: 'Fakultas Ekonomi dan Bisnis Islam',
                total: 1900,
                programs: [
                    { name: 'Akuntansi Syariah', students: 500 },
                    { name: 'Ekonomi Syariah', students: 500 },
                    { name: 'Manajemen', students: 600 },
                    { name: 'Manajemen Keuangan Syariah', students: 300 }
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
                    <td>2024/2025 Genap</td>
                    <td>${data.name}</td>
                    <td>Sarjana</td>
                    <td>${program.name}</td>
                    <td>${program.students}</td>
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