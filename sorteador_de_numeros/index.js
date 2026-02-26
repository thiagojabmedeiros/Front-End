const form = document.querySelector("form")
const quantity = document.querySelector("#numbers")
const start = document.getElementById("start")
const end = document.getElementById("end")
const button = document.querySelector("#appButton button")
let randomNumber1
let randomNumber2
let randomNumber3

quantity.value = 1
start.value = 1
end.value = 100



form.addEventListener("submit", (e) => {
    e.preventDefault()
    try {
        randomNumber1 = Math.floor(Math.random() * Number(end.value - start.value)) + Number(start.value)
        randomNumber2 = Math.floor(Math.random() * Number(end.value - start.value)) + Number(start.value)
        randomNumber3 = Math.floor(Math.random() * Number(end.value - start.value)) + Number(start.value)

        if (Number(quantity.value) === 1) {
            console.log(randomNumber1)
        }
        else if (Number(quantity.value) === 2) {
            console.log(randomNumber1)
            console.log(randomNumber2)
        }
        else if (Number(quantity.value) === 3) {
            console.log(randomNumber1)
            console.log(randomNumber2)
            console.log(randomNumber3)
        }
        else {
            return null
        }
    } catch(e) {
        console.log(e)
    }
})