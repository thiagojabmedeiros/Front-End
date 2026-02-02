const form = document.querySelector("form")
const inputAdd = document.querySelector("#newItem")
const buttonAdd = document.querySelector("form button")
const ul = document.querySelector("ul")
let index = 0

// adding elements
form.addEventListener("submit", (e) => {
    e.preventDefault()

    // catching the input name
    // trim() function removes all the spaces in the beginning and in the end of the sring
    const newItemName = inputAdd.value.trim()
    if (newItemName == "") {
        alert("This is not a valid input")
        return
    }
    const safeId = newItemName.replaceAll(" ", "") + index

    // creating list element
    const li = document.createElement("li")

    // creating label
    const label = document.createElement("label")
    label.htmlFor = safeId

    // creating input checkbox
    const inputCheck = document.createElement("input")
    inputCheck.id = safeId
    inputCheck.value = newItemName
    index++
    inputCheck.name = "item" + index
    inputCheck.type = "checkbox"

    // creating paragraph
    const paragraph = document.createElement("p")
    paragraph.textContent = newItemName

    //creating button
    const trashButton = document.createElement("button")
    trashButton.type = "button"
    trashButton.addEventListener("click", () => {
        li.remove()
        index--
    })

    // adding the elments to the label
    label.append(inputCheck, paragraph, trashButton)
    
    // adding label in the list
    li.append(label)

    // adding list in the unordered list
    ul.prepend(li)

    // cleaning input value after submit the new item
    inputAdd.value = ""
})

// adding message in the screen
const removedItemMessage = document.querySelector(".removedItem")
function showRemovedItemMessage() {
    removedItemMessage.classList.add("show")
}

// removing the message from screen
const removedItemCloseButton = removedItemMessage.querySelector("button")
removedItemCloseButton.addEventListener("click", () => {
    removedItemMessage.classList.remove("show")
})

