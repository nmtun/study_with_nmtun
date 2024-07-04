const bush = document.querySelector('.panda-card')
const panda = document.querySelector('.panda')
const lion = document.querySelector('.lion')

setInterval(() => {
    const bushB = bush.getBoundingClientRect()
    const lionB = lion.getBoundingClientRect()
    const Cleft = lionB.right - 20 >= bushB.left
    const Cright = lionB.left + 150 <= bushB.right

    if(Cleft && Cright){
        panda.classList.remove('show')
        panda.classList.add('hide')
    } else {
        panda.classList.remove('hide')
        panda.classList.add('show')
    }
}, 100)