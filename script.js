window.onload = () => {

  let hour = 0; 
  let minute = 0;
  let second = 0;
  
  function start() {
    const startButton = document.querySelector('#start');
    startButton.addEventListener('click', () => {
      let interval = setInterval(() => {
        second++;
        if (second == 60) {
          minute++;
          second = 0;
        }
        if (minute == 60) {
          hour++;
          minute = 0;
        }
        putValue();
      }, 100);
      // run function stop and reset
      stop(interval);
      reset(interval);
    });
  }
  
  start();

  function putValue() {
    document.querySelector('.hour').textContent = setItem(hour);
    document.querySelector('.minute').textContent = setItem(minute);
    document.querySelector('.second').textContent = setItem(second);
  }

  function setItem(target) {
    return (target < 10) ? `0${target}`: target;
  }
  
  function stop(param) {
    const stopButton = document.querySelector('#stop');
    stopButton.addEventListener('click', () => clearInterval(param));
  }
  
  function reset(param) {
    const resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click', () => {
      clearInterval(param);
      hour = 0;
      minute = 0;
      second = 0;
      putValue();
    });
  }
  
}