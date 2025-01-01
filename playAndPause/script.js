const car = document.querySelector('.car');
const playBtn = document.querySelector('.playBtn');
const pauseBtn = document.querySelector('.pauseBtn');

playBtn.addEventListener('click', play);
pauseBtn.addEventListener('click', pause);

function play() {
    car.style.animationPlayState = 'running';
}

function pause() {
    car.style.animationPlayState = 'paused';
}
