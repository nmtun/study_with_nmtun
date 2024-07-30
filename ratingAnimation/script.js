const startsEl= document.querySelectorAll(".fa-star")
const emojisEl= document.querySelectorAll(".fa-face")

const colors= ["red", "orange", "lightblue", "lightgreen", "green"]

updateRating(0)

startsEl.forEach((starEl, index) => {
    starEl.addEventListener("click", () => updateRating(index))
})

function updateRating(index) {
    startsEl.forEach((starEl, idx) => {
        if(idx < index + 1){
            starEl.classList.add("active")
        }else{
            starEl.classList.remove("active")
        }
    })
    emojisEl.forEach(emoji => {
        emoji.style.transform= `translateX(-${index * 48}px)`
        emoji.style.color= colors[index]
    })
}