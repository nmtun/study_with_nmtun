const character = [
    {
        name: "Đấu sĩ",
        image: "./assets/character_1.jpg"
    },
    {
        name: "Pháp sư",
        image: "./assets/character_2.jpg"
    },
    {
        name: "Dược sư",
        image: "./assets/character_3.jpg"
    },
    {
        name: "Tử thần",
        image: "./assets/character_4.jpg"
    },
    {
        name: "Sát thủ",
        image: "./assets/character_5.jpg"
    }
]

let current = 0
const player = document.querySelector('.player')
const playerName = document.querySelector('.name')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const selectButton = document.querySelector('.select')
const messageElement = document.getElementById('message')

function setPlayer() {
    player.setAttribute('src',character[current].image)
    playerName.textContent = character[current].name
}

setPlayer()

left.addEventListener('click', function() {
    if(current > 0){
        current--
        setPlayer()
    }
})

right.addEventListener('click', function() {
    if(current < character.length - 1){
        current++
    } else {
        current = 0
    }
    setPlayer()
}) 

function showMessage(msg) {
    messageElement.textContent = msg
    messageElement.style.display = 'block'
    setTimeout(() => {
        messageElement.style.display = 'none'
    }, 1000) 
}

selectButton.addEventListener('click', function() {
    showMessage("Đã chọn thành công!")
})
