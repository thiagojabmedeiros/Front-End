const form = document.querySelector("form")
const inputAdd = document.querySelector("#newItem")
const buttonAdd = document.querySelector("form button")
const ul = document.querySelector("ul")
let index = 0



form.addEventListener("submit", (e) => {
    e.preventDefault()
    // catching the input name
    const newItemName = inputAdd.value
    if (newItemName == "") {
        return
    }

    // creating list element
    const li = document.createElement("li")

    // creating label
    const label = document.createElement("label")
    label.htmlFor = newItemName

    // creating input checkbox
    const inputCheck = document.createElement("input")
    inputCheck.type = "checkbox"
    inputCheck.id = newItemName
    inputCheck.value = newItemName
    index++
    inputCheck.name = "item" + index

    // creating paragraph
    const paragraph = document.createElement("p")
    paragraph.textContent = newItemName

    //creating button
    const trashButton = document.createElement("button")
    trashButton.type = "button"

    // adding the elments to the label
    label.append(inputCheck, paragraph, trashButton)
    
    // adding label in the list
    li.append(label)

    // adding list in the unordered list
    ul.prepend(li)

    // cleaning input value after submit the new item
    inputAdd.value = ""

})