const form = document.querySelector("form")
const quantity = document.querySelector("#numbers")
const start = document.getElementById("start")
const end = document.getElementById("end")


// starting values for demostrantion
quantity.value = 1
start.value = 1
end.value = 100


// creating restrictions for input numbers
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


// app running
form.addEventListener("submit", (e) => {
    e.preventDefault()
    try {
        // calling function to execute in a button event
        deleteNums()
        removeApp()
        showTextResult()
        showResultNumbers()
        removeButton()

        // conditions to call functions
        if (Number(quantity.value) === 1) {
            onlyOneRandom()
            setTimeout(() => {
                addButton()
            }, 5000)
        }
        else if (Number(quantity.value) === 2) {
            twoRandoms()
            setTimeout(() => {
                addButton()
            }, 9000)
        }
        else if (Number(quantity.value) === 3) {
            threeRandoms()
            setTimeout(() => {
                addButton()
            }, 13000)
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
let count = 0
// function to show them
function showTextResult() {
    count += 1
    const pText = resultText.querySelector("p")
    pText.textContent = `${count}° RESULTADO`
    resultText.style.display = "flex"
}
function showResultNumbers() {
    resultNumbers.style.display = "flex"
}


// button element
const appButton = document.querySelector("#appButton")
const newResultButton = document.querySelector("#newResultButton")
// changing button content
function removeButton() {
    appButton.style.display = "none"
}
function addButton() {
    newResultButton.style.display = "initial"
}

// changing numbers text
const resultRandom = document.querySelectorAll(".resultBox")
function deleteNums() {
    resultRandom[0].style.display = "none"
    resultRandom[1].style.display = "none"
    resultRandom[2].style.display = "none"
}
function onlyOneRandom() {
    // creating variables
    let randomNumber1 = Math.floor(Math.random() * Number(end.value - start.value)) + Number(start.value)
    const result1 = resultRandom[0].querySelector("h2")

    // changing html value to our random number
    result1.textContent = randomNumber1

    // changing display to appear 
    resultRandom[0].style.display = "flex"
}
function twoRandoms() {
    // creating variables
    let randomNumber1 = Math.floor(Math.random() * (Number(end.value - start.value))) + Number(start.value)
    let randomNumber2 = Math.floor(Math.random() * (Number(end.value - start.value))) + Number(start.value)
    const result1 = resultRandom[0].querySelector("h2")
    const result2 = resultRandom[1].querySelector("h2")

    // returns the first value
    result1.textContent = randomNumber1
    resultRandom[0].style.display = "flex"

    // returns the second value with a delay
    setTimeout(() => {
        result2.textContent = randomNumber2
        resultRandom[1].style.display = "flex"
    }, 4000)
}
function threeRandoms() {
    // creating variables
    let randomNumber1 = Math.floor(Math.random() * Number(end.value - start.value)) + Number(start.value)
    let randomNumber2 = Math.floor(Math.random() * Number(end.value - start.value)) + Number(start.value)
    let randomNumber3 = Math.floor(Math.random() * Number(end.value - start.value)) + Number(start.value)
    const result1 = resultRandom[0].querySelector("h2")
    const result2 = resultRandom[1].querySelector("h2")
    const result3 = resultRandom[2].querySelector("h2")
    
    // receiving first value
    result1.textContent = randomNumber1
    resultRandom[0].style.display = "flex"

    // receiving second value
    setTimeout(() => {
        result2.textContent = randomNumber2
        resultRandom[1].style.display = "flex"
    }, 4000)

    // receiving third value
    setTimeout(() => {
        result3.textContent = randomNumber3
        resultRandom[2].style.display = "flex"
    }, 8000)
}