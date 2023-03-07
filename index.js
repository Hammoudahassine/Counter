let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}



const nameInput = document.getElementById("name-input")
let nameA = document.getElementById("namea")
let nameBtn = document.getElementById("name-btn")
nameBtn.addEventListener("click", function(){
    nameA.value = nameInput.value + "'s Emojis"

})