// Data untuk setiap fakultas
        const facultyData = {
            'FST': {
                name: 'Fakultas Sains dan Teknologi',
                total: 90,
                programs: [
                    { name: 'Teknik Informatika', students: 25 },
                    { name: 'Teknik Elektro', students: 15 },
                    { name: 'Fisika', students: 10 },
                    { name: 'Matematika', students: 10 },
                    { name: 'Biologi', students: 10 },
                    { name: 'Kimia', students: 10 },
                    { name: 'Agroteknologi', students: 10 }
                ]
            },
            'FTK': {
                name: 'Fakultas Tarbiyah dan Keguruan',
                total: 180,
                programs: [
                    { name: 'Pendidikan Agama Islam', students: 16 },
                    { name: 'Manajemen Pendidikan Islam', students: 16 },
                    { name: 'Pendidikan Guru Madrasah Ibtidaiyah (PGMI)', students: 16 },
                    { name: 'Pendidikan Islam Anak Usia Dini (PIAUD)', students: 16 },
                    { name: 'Tadris Bahasa Indonesia', students: 16 },
                    { name: 'Pendidikan Bahasa Inggris', students: 17 },
                    { name: 'Pendidikan Bahasa Arab', students: 16 },
                    { name: 'Pendidikan Matematika', students: 17 },
                    { name: 'Pendidikan Fisika', students: 16 },
                    { name: 'Pendidikan Kimia', students: 17 },
                    { name: 'Pendidikan Biologi', students: 17 },
                    
                ]
            },
            'FAD': {
                name: 'Fakultas Adab dan Humaniora',
                total: 100,
                programs: [
                    { name: 'Bahasa dan Sastra Arab', students: 25 },
                    { name: 'Sastra Inggris', students: 25 },
                    { name: 'Sejarah dan Kebudayaan Islam', students: 25 },
                    { name: 'Ilmu Perpustakaan dan Informasi Islam', students: 25 },
                ]
            },
            'FSH': {
                name: 'Fakultas Syariah dan Hukum',
                total: 75,
                programs: [
                    { name: 'Hukum Keluarga (Ahwal Syakhshiyyah)', students: 12 },
                    { name: 'Hukum Ekonomi Syariah (Muamalah)', students: 12 },
                    { name: 'Hukum Pidana Islam (Jinayah)', students: 12 },
                    { name: 'Perbandingan Madzhab', students: 12 },
                    { name: 'Hukum Tata Negara', students: 13 },
                    { name: 'Ilmu Hukum', students: 14 },
                ]
            },
            'FPS': {
                name: 'Fakultas Psikologi',
                total: 30,
                programs: [
                    { name: 'Psikologi', students: 30 }
                ]
            },
            'FISIP': {
                name: 'Fakultas Ilmu Sosial dan Ilmu Politik',
                total: 55,
                programs: [
                    { name: 'Sosiologi', students: 18 },
                    { name: 'Ilmu Politik', students: 18 },
                    { name: 'Administrasi Publik', students: 19 },
                ]
            },
            'FU': {
                name: 'Fakultas Ushuluddin',
                total: 50,
                programs: [
                    { name: 'Aqidah dan Filsafat Islam', students: 10 },
                    { name: 'Studi Agama-Agama', students: 10 },
                    { name: 'Ilmu Al-Qur\'an dan Tafsir', students: 10 },
                    { name: 'Ilmu Hadits', students: 10 },
                    { name: 'Tasawuf dan Psikoterapi', students: 10 }
                ]
            },
            'FDK': {
                name: 'Fakultas Dakwah dan Komunikasi',
                total: 60,
                programs: [
                    { name: 'Komunikasi dan Penyiaran Islam', students: 10 },
                    { name: 'Bimbingan dan Konseling Islam', students: 10 },
                    { name: 'Pengembangan Masyarakat Islam', students: 10 },
                    { name: 'Manajemen Dakwah', students: 10 },
                    { name: 'Manajemen Haji dan Umrah', students: 8 },
                    { name: 'Ilmu Komunikasi', students: 12 }
                ]
            },
            'FEBI': {
                name: 'Fakultas Ekonomi dan Bisnis Islam',
                total: 60,
                programs: [
                    { name: 'Akuntansi Syariah', students: 15 },
                    { name: 'Ekonomi Syariah', students: 15 },
                    { name: 'Manajemen', students: 20 },
                    { name: 'Manajemen Keuangan Syariah', students: 10 }
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
                    <td>${selectedFaculty}</td>
                    <td>${data.name}</td>
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