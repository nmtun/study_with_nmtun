const button = document.querySelector('.eat')
const pou = document.querySelector('.pou')
const food = document.querySelector('.food')

let width = 100

button.addEventListener('click', function() {
    width += 10
    food.classList.add('show')
    setTimeout(() => {
        pou.style.width = width + 'px'
        food.classList.remove('show')
    }, 1500);
})