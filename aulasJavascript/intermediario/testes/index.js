const form = document.querySelector("form")
const firstNumber = document.querySelector("#firstNumber")
const secondNumber = document.querySelector("#secondNumber")
const result = document.querySelector("#result h2")



form.addEventListener("submit", (e) => {
    e.preventDefault()
    result.textContent = randomNum()
})

let randomNum = function() {
    let start = Number(firstNumber.value)
    let end = Number(secondNumber.value)
    let newRandom = Math.floor(Math.random() * (end - start)) + start
    return newRandom
}