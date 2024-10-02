// script untuk FORM
const scriptURL = 'https://script.google.com/macros/s/AKfycbwWGja2th982hhFxkZlQc0F7a_uZA_WugHznQVvmkPI_FzGFk0erAXUnevnG2rjKxZn/exec';
const form = document.forms['sayuti-contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const alertSuccess = document.querySelector('.alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // ketika tombol di klik
  // tampilkan tombol loading. hilangkan tombol kirim
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim. hilangkan tombol loading
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      // tampilkan alert
      alertSuccess.classList.toggle('d-none');

      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});

//   Script untuk animasi di Achivements

// memanggil target achivement yang akan di eksekusi
const target = document.getElementById('achive');
// memanggil element-element yang ada di dalam target
const klien = document.querySelector('.client');
const negara = document.querySelector('.country');
const rating = document.querySelector('.rating');
const jProject = document.querySelector('.nProject');
// function untuk menampilkan event saat content muncul di layar(viewport)
const tampilkanAnimasi = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // code untuk event yang akan terjadi
      let waktuAwal = 0;
      function waktu(element, batas) {
        setInterval(function () {
          let waktuBerjalan = waktuAwal;
          element.innerHTML = waktuBerjalan;
          waktuBerjalan = waktuAwal;

          if (waktuAwal >= batas) {
            clearInterval(waktu);
            element.innerHTML = batas;
          }
          waktuAwal++;
        }, 120);
        // code agar event ini hanya berlaku sekali
        observer.unobserve(entry.target);
      }

      // memanggil setiap element untuk di eksekusi
      waktu(klien, 100);
      waktu(negara, 12);
      waktu(jProject, 125);
      waktu(rating, 4);
    }
  });
};

const observer = new IntersectionObserver(tampilkanAnimasi, {
  root: null,
  rootMargin: '0px',
  threshold: 0.6,
});

observer.observe(target);
