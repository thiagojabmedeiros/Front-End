const form = document.querySelector("form")
const input = document.querySelector("form input")
const button = document.querySelector("form button")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const newName = input.value
    input.value = ""
    creatingIdValue(newName)
})

function creatingIdValue(name) {
    let splitNameId = name.split(" ")
    let nameId = ""
    for(i = 0; i < splitNameId.length; i++) {
        if (i == 0){
           nameId += `${(splitNameId[i][0]).toLowerCase() + splitNameId[i].slice(1, splitNameId[i].length)}`
        }
        else {
            nameId += `${splitNameId[i][0].toUpperCase() + splitNameId[i].slice(1, splitNameId[i].length).toLowerCase()}`
        }
    }
    console.log(nameId)
}