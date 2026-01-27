// currencys
const USD = 5.28
const EUR = 6.28
const GBP = 7.22


const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const result = document.getElementById("result")
const description = document.getElementById("description")

amount.addEventListener("input", () => {
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "")
    
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    switch(currency.value) {
        case "USD":
            convertMoney(amount.value, USD, "US$")
            break
        case "EUR":
            convertMoney(amount.value, EUR, "€")
            break
        case "GBP":
            convertMoney(amount.value, GBP, "£")
            break
    }
})


function convertMoney(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = R$ ${price}`
        let total = String(amount * price).replace(".", ",")
        result.textContent = `${total} REAIS`

        footer.classList.add("show-result")
    } catch (error) {
        footer.classList.remove("show-result")

        console.log(error)
        alert("Não foi possível realizar a conversão.")
    }
}
