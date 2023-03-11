window.onload = () => {
  
  let hour = 0;
  let min = 0;
  let sec = 0;
  let mil = 0;
  let interval;
  
  const hours = document.querySelector('.hours');
  const minutes = document.querySelector('.minutes');
  const seconds = document.querySelector('.seconds');
  const miliseconds = document.querySelector('.miliseconds');
  
  function stopwatch() {
    /*
      clear interval lebih dahulu, guna mencegah
      kesalahan pada saat program dijalankan
    */
    clearInterval(interval);
    // jalankan set interval
    interval = setInterval(() => {
      mil++;
      // masukkan ke element miliseconds
      miliseconds.textContent = setNumber(mil);
      // jika isi variabel mil sudah mencapai angka 100
      if (mil == 100) {
        // ubah menjadi 0
        mil = 0;
        sec++;
        // masukkan ke element seconds 
        seconds.textContent = setNumber(sec);
        // jika isi variabel sec sudah mencapai angka 60
        if (sec == 60) {
          // ubah menjadi 0
          sec = 0;
          min++;
          // masukkan ke element minutes
          minutes.textContent = setNumber(min);
          // jika isi variabel min sudah mencapai 60
          if (min == 60) {
            // ubah menjadi 0 
            min = 0;
            hour++;
            // masukkan ke element hours
            hours.textContent = setNumber(hour);
          }
        }
      }
    }, 10);
  }
  
  function setNumber(number) {
    // jika angka lebih rendah dari angka 10, tambahkan angka 0 didepannya
    return (number < 10) ? '0' + number : number;
  }
  
  // ketika tombol start ditekan, jalankan fungsi stopwatch()
  const startButton = document.querySelector('.start');
  startButton.addEventListener('click', stopwatch);
  
  // ketika tombol pause ditekan, hentikan interval
  const pauseButton = document.querySelector('.pause');
  pauseButton.addEventListener('click', () => clearInterval(interval));
  
  // ketika tombol reset ditekan
  const resetButton = document.querySelector('.reset');
  resetButton.addEventListener('click', () => {
    // hentikan interval
    clearInterval(interval);
    // ubah semua menjadi angka 0 lagi seperti semula
    clear();
  });
  
  function clear() {
    // ubah menjadi 0 semua
    hour = 0;
    min = 0;
    sec = 0;
    mil = 0;
    // set ke element
    hours.textContent = setNumber(hour);
    minutes.textContent = setNumber(min);
    seconds.textContent = setNumber(sec);
    miliseconds.textContent = setNumber(mil);
  }
  
}