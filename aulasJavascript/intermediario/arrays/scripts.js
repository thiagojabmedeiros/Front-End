console.log("hello, arrays")

// creating as objects
const array = new Array()
console.log(array)
console.log(typeof array)

const array2 = new Array(10)
console.log(array2)

// we are allowed to create an array with diferent contents inside it
let arrayContents = [
    "string",
    10, 
    true,
    [10, 20, 30, 40],
    {
        name: "Thiago",
        email: "thiagojabm@gmail.com"
    },
    function () {
        console.log("this function is inside the array")
    }
]

// string
console.log(arrayContents[0])

// number
console.log(arrayContents[1])

// boolean
console.log(arrayContents[2])

// another array
console.log(arrayContents[3])

// object 
console.log(arrayContents[4])
console.log(arrayContents[4].email)

// function
arrayContents[5]()

// transforming a string in an array with split function
let name1 = "Thiago jose de almeida barroso medeiros"
console.log(typeof name1)

let newArray = name1.split(" ")
console.log(typeof newArray)
console.log(newArray)

// selecting all of the characters
console.log(Array.from(name1))


// adding in the end of an array
let arrayTest = [1,2,3,4,5,6]
arrayTest.push(35)
console.log(arrayTest)

// adding in the begining of an array
arrayTest.unshift(97)
console.log(arrayTest)

// removing in the begining of an array
arrayTest.shift()
console.log(arrayTest)

// removing in the end of an array
arrayTest.pop()
console.log(arrayTest)