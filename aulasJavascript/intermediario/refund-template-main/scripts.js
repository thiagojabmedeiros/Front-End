const form = document.querySelector("form")
// inputs
const expense = document.getElementById("expense")
const category = document.getElementById("category")
const amount = document.getElementById("amount")

// catching the input value
amount.addEventListener("input", () => {
    // only allowing numbers and not characters by regex
    let _value = amount.value.replace(/\D+/g, "")
    // converting to cents
    _value = Number(_value) / 100
    // converting the currency to BRL format by our built function
    amount.value = formatCurrencyBRL(_value)
})

function formatCurrencyBRL(x) {
    x = x.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
    return x
} 

// form functions
form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    // creating an object 
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }
})