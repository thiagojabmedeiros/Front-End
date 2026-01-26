console.log(document.title)

// chamar pela id
const guestById = document.getElementById("guest-2")
console.log(guestById)

// chamar pela classe
const guestByClassName = document.getElementsByClassName("guest")
console.log(guestByClassName)
console.log(guestByClassName[0])
console.log(guestByClassName[1])

// chamar pelo nome da tag
const guestByTag = document.getElementsByTagName("li")
console.log(guestByTag)
console.log(guestByTag[1])
console.log(guestByTag[0])

// queryselector
const guest = document.querySelector("#guest-1")
console.log(guest)

let guest2 = document.querySelectorAll(".guest")
console.log(guest2[0])

// exibir conteúdo
console.log(guest2[0].textContent) // conteúdo visível e oculto
console.log(guest2[0].innerText) //  apenas conteúdo vísivel
console.log(guest2[0].innerHTML) //  apenas conteúdo vísivel

guest2 = document.querySelector(".guest span") // procura pelo primeiro elemento com span
console.log(guest2)
guest2.textContent = "Thiago"

let input = document.querySelector("#name")
// adicionando classe
input.classList.add("input-error")
// se a classe já existe ele remove, se não, ele adiciona
input.classList.toggle("input-error")

// alterando styles
let button = document.querySelector("#btn")
button.style.backgroundColor = "red"

// criando elementos
const newGuest1 = document.createElement("li")
newGuest1.classList.add("guest")

const newName1 = document.createElement("span")
newName1.textContent = "Diego"
newGuest1.append(newName1)

const lists = document.querySelector("ul")
lists.append(newGuest1)

const newGuest2 = document.createElement("li")
newGuest2.classList.add("guest")

const newName2 = document.createElement("span")
newName2.textContent = "Marcos"
newGuest2.append(newName2)

lists.prepend(newGuest2)