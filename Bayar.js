// Di dalam script.js

const kursusSelect = document.getElementById('kursus');
const hargaText = document.getElementById('harga');
const submitButton = document.getElementById('submit-button');

kursusSelect.addEventListener('change', function() {
    const selectedKursus = kursusSelect.value;
    let harga = 0;

    if (selectedKursus === 'html') {
        harga = 10000;
    } else if (selectedKursus === 'css') {
        harga = 10000;
    } else if (selectedKursus === 'both') {
        harga = 20000;
    }

    hargaText.textContent = `Harga: ${harga} IDR`;
});

submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah formulir terkirim

    // Mengganti URL WhatsApp dengan nomor Anda
    const waURL = 'https://wa.me/6285721831812';

    // Mengambil data dari formulir (nama dan umur)
    const nama = document.getElementById('nama').value;
    const umur = document.getElementById('umur').value;
    const kursus = kursusSelect.options[kursusSelect.selectedIndex].text;
    const pesan = `Saya ingin mendaftar kursus ${kursus}. Nama: ${nama}, Umur: ${umur}`;

    // Membuka jendela WhatsApp
    window.open(`${waURL}?text=${encodeURIComponent(pesan)}`, '_blank');
});