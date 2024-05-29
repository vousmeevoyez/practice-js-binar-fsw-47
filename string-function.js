const name = 'Kelvin';
const pekerjaan = 'Developer bingle';

// Mengganti string dengan pola tertentu menjadi string lain.
const pesan = `Halo nama aku ${name}, aku kerja juga sebagai ${pekerjaan}`;
console.log(pesan.replace('Halo', 'Hey'));

// Mengambil beberapa karakter string dari index awal sampai sebelum index akhir.
console.log(pesan.substring(0, 4));
// huruf kecil semua
console.log(pesan.toLowerCase());
// huruf besar semua
console.log(pesan.toUpperCase());

const pesanDenganSpasi = `   Halo nama aku ${name}, aku kerja juga sebagai ${pekerjaan}`;
// menghilangkan spasi
console.log(pesanDenganSpasi.trim());

// menghitung panjang sebuah teks
console.log(pesanDenganSpasi.length);

// memotong teks sesuai urutan teks
console.log(pesanDenganSpasi.slice(0,23));