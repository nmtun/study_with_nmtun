const dino = document.querySelector('.dino')
const cactus = document.querySelector('.cactus')
const button = document.querySelector('button')

button.addEventListener('click', function() {
    cactus.style.animationPlayState = 'running'
    button.style.display = 'none'
})
    
window.addEventListener('click', function(){
    dino.style.bottom = '150px'
    this.setTimeout(() => {
        dino.style.bottom = '-5px'
    }, 600);
})

setInterval(() => {
    const dinoBound = dino.getBoundingClientRect()
    const cactusBound = cactus.getBoundingClientRect()
    const leftJump = dinoBound.right - 10 >= cactusBound.left
    const rightJump = dinoBound.left + 20 <= cactusBound.right
    const topJump = dinoBound.bottom >= cactusBound.top
    if(leftJump && topJump && rightJump) {
        document.body.innerHTML = 'Game Over!!! Please reload to restart <3'
    }
}, 100)