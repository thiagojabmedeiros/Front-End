console.log("hello, immutability")

// lets try to copy an object
const object1 = {
    name: "book",
    id: 123
}
// here you might think that youre copying it but you re not because you are just making a reference to same place in storage, so if you change something in object 2, you actually change in object1

// const object2 = object1
// object2.name = "phone"

// the correct way is by using spread operator:
const object2 = { 
    ...object1,
    name: "phone",
    description: "new and tech"
}

object2.id = 321

console.log(object1, object2)
console.log("##########")
// but it only changes the first "line" of our object, if we had other object inside the object we would not be able to change their copy, because it was just a reference, so we need to do the same algorithm to copy and change it.

const teacher1 = {
    name: "Marcus",
    age: 21,
    students: [{ username: "christhechampion", email: "chris@email.com" }]
}

const teacher2 = { 
    ...teacher1,
    name: "thiago",
    age: 22,
    students: [...teacher1.students]
}

teacher2.students.push({ username: "larissa", email: "lari@email.com"})

console.log(teacher1,teacher2)

console.log("##########")
// now we want to create, for instance, an object the is not possible to change anything, we call the function Object.freeze("object")

const student = {
    name: "thiago",
    age: 22,
    course: "computer science",
    grades: [{
        algorithms: 1,
        discretMath: 2,
        programming: 3
    }]
}
// freezing object, then it is not possible to change anything in first "line"
Object.freeze(student)

student.name = "bruno"
student.age = 21
student.course = "math"
// student grades is an array of objects, so we can change it because it is on second "line"

student.grades[0] = [{
    nothing: 0
}]

// notice that we can also change it so we must freeze it and to do it we can create a function freeze deeply all the objects

Object.freeze(student.grades)
student.grades[0] = [{
    something: 1
}]

console.log(student)

function deepFreeze(obj) {
    // transforming the object in an array with its keys
    const objs = Reflect.ownKeys(obj)

    // running through the array and verifying the keys
    for (const objx of objs) {

        const value = obj[objx]
        // here our condition verifies if objx exists 
        // then it veryfies if obj[objx] is an object or an function
        // if all the condition is true we call deepfreeze and freeze it
        if (value && typeof value === "object" || typeof value === "function") {
            // here we call it recursively
            deepFreeze(value)
        }
    }
    // return the object freezeed
    return Object.freeze(obj)
}

const student2 = {
    name: "thiago",
    grades: [{
        algorithms: 1,
        dataBase: 2,
        computer: 3
    }]
}

Object.freeze(student2)
student2.name = "larissa"
student2.grades[0] = { nothing: 0}

deepFreeze(student2)
student2.grades[0] = { something: 1 }

console.log(student2)