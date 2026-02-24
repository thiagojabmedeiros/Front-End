// creating an object
let objectX: {
    name: string,
    age: number,
    phone: number,
    email?: string, // this make the email be optional by adding "?" in the end
}

// creating and verifying
objectX = { name: "thiago", age: 22, phone: 3245594594}
objectX = { name: "thiago", age: 22, phone: 3245594594, email: "thiago@email.com"}
objectX = { name: "thiago", phone: 3245594594, email: "thiago@email.com"}


// functions are created and typed like this: function name(variable: type): return type {}
function sumXY(x: number, y: number): number {
    let sum: number = x + y 
    return sum
}

let createFunction = (a: number, b: string) => {
    console.log(a + 1)
    console.log("hello" + b)
    let strs: number = b + a
}