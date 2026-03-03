"use strict" 
function userName() {
    /*
    it does not allow errors like and many others:
    variableName = value
    */ 

    const firstName = "thiago"
    const lastName = "medeiros"
    return firstName + " " + lastName
} 

const uname = userName()
console.log(uname)

// function sumNums(a, a, b) {
//     "use strict"
//     return a + a + b
// }
function sumNums(a, b, c) {
    return a + b + c
}

const result = sumNums(1,2,3) 
/*
you might think that it returns 1 + 2 + 3
but it returns 2 + 2 + 3, and the syntaxe is incorrect
*/

// assigning arrays
let array = ["hello", 123]
const [greeting, num] = array
console.log(greeting)
console.log(num)

let array2 = ["banana", "fries", "watch", "ps5", "audi"]
const [,,item] = array2
const [,,,,item2] = array2
console.log(item)
console.log(item2)

// assining objects
let objectX = {
    namex: "kite",
    brand: "cabrinha",
    year: "2024",
    color: "red",
    size: 12,
}

const { namex, brand, year, color, size } = objectX 
console.log(brand)

let product = {
    id: 12,
    description: "cool",
    name: "ps4"
}
const { description } = product
console.log(description)


// assining functions 
function creatingSomething( {description, price} ) {
    console.log("Description:", description)
    console.log("Price:", price)
}
// the order does not matter here
creatingSomething({
    price: 12,
    description: "cool", 
})

// rest/args and spread operators
function nums(a, ...rest) {
    console.log(a)

    // dinamic size
    console.log("size:",rest.length)
    // array rest
    console.log("array:",rest)
    // spread operator
    console.log("spread:",...rest)
}
nums(12,1,2,3,4,5)

let twoObjects = [
    {
        name: "thiago",
        sex: "male",
        age: 22
    },
    {
        name: "larissa",
        sex: "female",
        age: 23
    }
]
// normal array
console.log(twoObjects)
// spread operator
console.log(...twoObjects) 

// array methods
/*
.map((e) => condition)
.filter((e) => condition)
.findIndex((e) => condition)
.find((e) => condition)
.every((e) => condition)
.some((e) => condition)
.reduce((e) => condition)
*/
let i = 0
let productsArr = ["macbook", "web", "iphone", "iwatch", "web", "html", "apple", "c++", "web"]

// map run through the array and return the value
productsArr.map((e) => {
    console.log(`${i}: ${e}`)
    i += 1
})

// filter() returns an array according to the condition
const product3 = productsArr.filter((e) => e.length > 3)
console.log(product3)

// if the element is in array returns its index otherwise returns -1 
console.log(productsArr.findIndex((e) => e === "apple"))
console.log(productsArr.findIndex((e) => e === "banana"))

// return the value if it is index else return undefined
console.log(productsArr.find((e) => e === "banana"))

// return a boolean if every item has the condition 
console.log(productsArr.every((value) => value.length >= 4))

// return true if at least one item has the condition
console.log(productsArr.some((value) => value.length >= 4))

// reduce method reduces an array to one value
let numx = [1,2,3,4,5,6,7,8,9,10]
let resultx = numx.reduce((acumulator, currentValue, index) =>{
    // console.log(`acumulator: ${acumulator}`)
    // console.log(`currentValue: ${currentValue}`)
    // console.log(`index: ${index}`)
    // console.log(`sum: ${acumulator + currentValue}`)
    // console.log("######")
    return acumulator + currentValue
},0)

console.log(resultx)