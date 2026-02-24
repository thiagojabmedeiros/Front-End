// creating an interface
interface Iperson {
    name: string,
    sex: string,
    age: number
}

// extending interfaces
interface Iteacher extends Iperson {
    teacherEmail: string,
    subjects: string[]
}
interface Istudent extends Iperson {
    studentEmail: string
}

// when we overwrite an interface, it does not replace the content, however it mixes the new content with the last content
interface Istudent {
    lessons?: string[]
}

// creating an instance 
let thiago: Istudent
thiago = { name: "thiago", age: 22, sex: "male", studentEmail: "thiago@email.br", lessons: ["discret math", "algorithms"]}


// creating types
type Tperson = {
    name: string,
    sex?: string,
    age: number
}

type Tteacher = Tperson & {
    teacherEmail: string,
    subjects: string[]
}

type Tstudent = Tperson & {
    studentEmail: string,
    lessons: string[]
}
// here we are not allowed to overwrite types
// type Tstudent = {
//     lessons: string[]
// }´

// creating an instance
let samuel: Tstudent
samuel = { name: "samuel", age: 1.5, studentEmail: "samuel@email.ts", lessons: ["math", "physics"]}


// restrict types
type Size = "small" | "medium" | "large" // only accept these values
let sizeMode: Size
sizeMode = "small" 
sizeMode = "pequeno"
sizeMode = 2332
sizeMode = true
sizeMode = "medium"
sizeMode = "large"
sizeMOde = "grande"


// enums

enum Profile {
    admin = 1,
    staff = 2,
    mannager = 3
}

console.log(Profile.admin) // returns 1
console.log(Profile.staff) // returns 2
console.log(Profile.mannager) // returns 3