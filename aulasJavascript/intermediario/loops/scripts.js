console.log("hello, loops!")



let i = 0

console.log("###### WHILE LOOP #######")
// while loops excutes while (something is true), otherwise it stops
while (i < 10) {
    i++
    console.log(i)
}

i = 11

console.log("###### DO WHILE LOOP #######")
// do while loops execute the action at least once and then verify if the condictional is true
do {
    i++ 
    console.log(i)
} while(i < 10)


console.log("###### FOR LOOP #######")
// for loops are the most used and common to see, here we have defined how many loops we're gonna do
for (let x = 0; x < 10; x++) {
    console.log(x)
}

console.log("###### FOR IN #######")
// for in loops are similar to for loops in python
// lets create an object and an array to show
let object = {
    name: "Thiago",
    surname: "Medeiros",
    email: "thiago@email.com"
}

i = 0
// its not going to increase or decrease, its gonna to acess the property in dinamic way
for (let property in object) {
    console.log(++i)
    console.log(property) // acess the property
    console.log(object[property]) // acess the property's value
}

console.log("###### FOR OF #######")

// when we use for of loop we access imediatly the index value, not the index
let listNumbers = [1,32,43,64,12,21,491,212,994]
for (let number of listNumbers) {
    console.log(number)
}