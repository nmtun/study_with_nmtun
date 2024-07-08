const button = document.querySelector('.order-btn')
const plane = document.querySelector('.plane')

button.addEventListener('click', function() {
    button.classList.add('loading')
    plane.classList.add('play')
    setTimeout(() => {
        button.textContent = 'Success'
        button.classList.remove('loading')
        plane.classList.remove('play')
    }, 3500);
})