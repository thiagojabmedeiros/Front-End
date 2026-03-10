async function fetchProducts() {
    const response = await fetch("http://localhost:3333/products")
    const data = await response.json()
    console.log(data)
}

async function fetchProductsById(id) {
    const response = await fetch(`http://localhost:3333/products/${id}`)
    const data = await response.json()
    console.log(data)
}

const pForm = document.querySelector("form")
const pName = document.getElementById("name")
const pPrice = document.getElementById("price")
const pSubmit = document.getElementById("submit")

pForm.addEventListener("submit", (e) => {
    e.preventDefault()
    fetch("http://localhost:3333/products", {
        method: "POST",
        header: {
            "content": "application/json"
        },
        body: JSON.stringify({
            id: Math.floor(Math.random() + 10),
            name: pName.value,
            price: pPrice.value,
        })
    })
})