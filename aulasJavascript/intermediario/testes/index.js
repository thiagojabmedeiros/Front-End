const max = document.querySelector("#max").value
const min = document.querySelector("#min").value

let randomNumber = Math.floor(Math.random() * (max - min) + min)

const randomNum = document.querySelector("#randomNum")
randomNum.textContent = randomNumber