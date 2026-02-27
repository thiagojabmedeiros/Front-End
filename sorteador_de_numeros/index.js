const form = document.querySelector("form")
const quantity = document.querySelector("#numbers")
const start = document.getElementById("start")
const end = document.getElementById("end")
const button = document.querySelector("#appButton button")

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

function removeApp() {

}