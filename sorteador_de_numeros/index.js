const form = document.querySelector("form")
const quantity = document.querySelector("#numbers")
const start = document.getElementById("start")
const end = document.getElementById("end")



quantity.value = 1
start.value = 1
end.value = 100

quantity.addEventListener("input", () => {
    let _value = quantity.value.replace(/\D+/g, "")
    quantity.value = _value
    const valid = [1, 2, 3]
    if (!valid.includes(Number(quantity.value))) {
        quantity.value = ""
    }
})
start.addEventListener("input", () => {
    let _value = start.value.replace(/\D+/g, "")
    start.value = _value

    if (Number(start.value) > 99) {
        start.value = 99
    } else if (Number(start.value) < 0) {
        start.value = ""
    } 

    return start.value
})
end.addEventListener("input", () => {
    let _value = end.value.replace(/\D+/g, "")
    end.value = _value
    if (Number(end.value) <= Number(start.value)) {
        end.value = Number(start.value) + 2
    } else if (Number(end.value) > 100) {
        end.value = 100
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    try {
        removeApp()
        showTextResult()
        showResultNumbers()
        changeButtonText()
        let randomNumber1 = Math.floor(Math.random() * Number(end.value - start.value)) + Number(start.value)
        let randomNumber2 = Math.floor(Math.random() * Number(end.value - start.value)) + Number(start.value)
        let randomNumber3 = Math.floor(Math.random() * Number(end.value - start.value)) + Number(start.value)

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

// const that disappear when random number shows
const inputText = document.querySelector("#inputText")
const inputForm = document.querySelector("#inputForm")
const inputNums = document.querySelector("#inputNums")
// function to remove them
function removeApp() {
    inputText.style.display = "none"
    inputForm.style.display = "none"
    inputNums.style.display = "none"
}

// const that appear to show result
const resultText = document.querySelector("#resultText")
const resultNumbers = document.querySelector("#resultNumbers")
// function to show them
function showTextResult() {
    resultText.style.display = "flex"
}
function showResultNumbers() {
    resultNumbers.style.display = "flex"
}


// button element
const button = document.querySelector("#appButton button")
// changing button content
function changeButtonText() {
    button.innerHTML = `SORTEAR NOVAMENTE <img src="/sorteador_de_numeros/assets/direction.svg" alt="direction">`
    form.style.border = "red solid"
}