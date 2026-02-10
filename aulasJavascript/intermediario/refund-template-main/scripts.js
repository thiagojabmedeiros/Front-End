const form = document.querySelector("form")
// inputs
const expense = document.getElementById("expense")
const category = document.getElementById("category")
const amount = document.getElementById("amount")

// list
const expenseList = document.querySelector("ul")
const expenseCountSpan = document.querySelector("aside header p span")
const expenseCountH2 = document.querySelector("aside header p h2")
let totalCount = 0

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
    createExpense(newExpense)
})

// creating the item elements
function createExpense(x) {
    try {
        // creating list
        const expenseItem = document.createElement("li")
        expenseItem.classList.add("expense")

        // creating list icon
        const expenseIcon = document.createElement("img")
        expenseIcon.setAttribute('src', `./img/${x.category_id}.svg`)
        expenseIcon.setAttribute('alt', `${x.category_name}`)

        // creating div list
        const expenseDiv = document.createElement("div")
        expenseDiv.classList.add("expense-info")
        const expenseDivStrong = document.createElement("strong")
        expenseDivStrong.innerText = `${x.expense}`
        const expenseDivSpan = document.createElement("span")
        expenseDivSpan.innerText = x.category_name
        // adding the elements in div
        expenseDiv.append(expenseDivStrong)
        expenseDiv.append(expenseDivSpan)

        // creating span list
        const expenseSpan = document.createElement("span")
        expenseSpan.classList.add("expense-amount")
        expenseSpan.innerHTML = `<small>R$</small>${x.amount.toUpperCase().replace("R$", "")}`

        // creating remove icon list
        const expenseRemoveIcon = document.createElement("img")
        expenseRemoveIcon.setAttribute("src", `./img/remove.svg`)
        expenseRemoveIcon.setAttribute("alt", "remover")
        expenseRemoveIcon.classList.add("remove-icon")

        // adding icon to list
        expenseItem.append(expenseIcon)
        expenseItem.append(expenseDiv)
        expenseItem.append(expenseSpan)
        expenseItem.append(expenseRemoveIcon)
        expenseList.append(expenseItem)

        expenseCount()
        totalCountExpense(x)
    } catch (error) {
        alert("Não foi possível criar o element")
        console.log(error)
    }
}

// expense's count
function expenseCount() {
    try {
        let itemCount = expenseList.children
        expenseCountSpan.innerText = `${itemCount.length} ${itemCount.length > 1 ? "despesas" : "despesa"}`
    } catch(error) {
        alert("Não foi possível contar as despesas")
        console.log(error)
    }
}

// total expense count
function totalCountExpense(x) {
    totalCount = totalCount + x.amount
    expenseCountH2.innerHTML = `<small>R$</small>${totalCount}`
}