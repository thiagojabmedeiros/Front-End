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
// remove first button on screen
function removeButton() {
    appButton.style.display = "none"
}
// add new button on screen
function addButton() {
    newResultButton.style.display = "initial"
}

// creating variable to reload results
const reloadResult = newResultButton.querySelector("button")
reloadResult.addEventListener("click", () => {
    try {
        newResultButton.style.display = "none"
        showTextResult()
        deleteNums()
        setTimeout(() => {
            if (Number(quantity.value) === 1) {
                onlyOneRandom()
                setTimeout(()=> {
                    newResultButton.style.display = "initial"
                }, 5000)
            } else if (Number(quantity.value) === 2) {
                twoRandoms()
                setTimeout(() => {
                    newResultButton.style.display = "initial"
                }, 9000)
            } else if (Number(quantity.value) == 3) {
                threeRandoms()
                setTimeout(() => {
                    newResultButton.style.display = "initial"
                },1300)
            }
        }, 1)
    }
    catch(e) {
        console.log(e)
    }
})
// changing numbers text
const resultRandom = document.querySelectorAll(".resultBox")
// remove numbers from screen
function deleteNums() {
    resultRandom[0].style.display = "none"
    resultRandom[1].style.display = "none"
    resultRandom[2].style.display = "none"
}
// return a random number
function generateRandom() {
    return Math.floor(Math.random() * Number(end.value - start.value)) + start.value
}
// generante one random
function onlyOneRandom() {
    // creating variables
    let randomNumber1 = Math.floor(Math.random() * Number(end.value - start.value)) + Number(start.value)
    const result1 = resultRandom[0].querySelector("h2")

    // changing html value to our random number
    result1.textContent = randomNumber1

    // changing display to appear 
    resultRandom[0].style.display = "flex"
}
// variables to create repeat number condition
const selectRepeat = document.querySelector("#selectRepeat")
const selectRepeatInput = selectRepeat.querySelector("input")
// generate two randoms
function twoRandoms() {
    // creating variables 
    let randomNumber1 = generateRandom()
    let randomNumber2 = generateRandom()
    // checking if they can be equals
    if (selectRepeatInput.checked){
        while (randomNumber1 === randomNumber2) {
            randomNumber2 = generateRandom()
        }
        console.log("the numbers can not repeat")
    } else {
        console.log("the numbers can repeat")
    }
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
// generate three randoms
function threeRandoms() {
    // creating variables
    let randomNumber1 = generateRandom()
    let randomNumber2 = generateRandom()
    let randomNumber3 = generateRandom()

    // checking repeating numbers
    if (selectRepeatInput.checked) {
        while (randomNumber1 === randomNumber2) {
            randomNumber2 = generateRandom()
        }
        while (randomNumber1 === randomNumber3 || randomNumber2 === randomNumber3) {
            randomNumber3 = generateRandom()
        }
        console.log("the numbers can not repeat")
    } else {
        console.log("the numbers can repeat")
    }

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