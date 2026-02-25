// Partial
interface Iproduct {
    id: number,
    name: string,
    description: string,
    price: number
}
const product: Iproduct = { id: 15, name: "iphone 15", description: "fast and smooth", price: 2000 }
const productName: Partial<Iproduct> = { name: "iphone 15 red case" }


// Pick 
type Trating = 1 | 2 | 3 | 4 | 5
interface Ibook {
    name: string,
    content: string,
    rate: Trating
}
let x: number = 30
const bookName: Pick<Ibook, "name"> = { name: "how to make friends and influency people"}
const bookContentRating: Pick<Ibook, "content" | "rate"> = { 
    content: `how to be a 
    better person and deal 
    with hard people! ${x}`,
    rate: 4 }


// Omit 
type Tyears = 2020 | 2021 | 2022 | 2023 | 2024 | 2025
type Tcolors = "red" | "blue" | "green" | "black" | "white"
interface Icar {
    name: string,
    color: Tcolors,
    year: Tyears
}
const carNameAndColor: Omit<Icar, "year"> = { name: "civic", color: "green"}
const carYear: Omit<Icar, "name" | "color"> = { year: 2025}


// Record 
type Tscore = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
const scores: Record<string, Tscore> = {
    "Thiago": 5,
    "Lucas": 7,
    Jason: 9
}

type Tprofile = "admin" | "mannager" | "staff"
const jobFunctions: Record<Tprofile, number> = {
    "admin": 1,
    mannager: 2,
    "staff": 3
}


// typeof
interface Iperson {
    name: string, 
    age:  number,
    email: string,
    id?: number
}
const thiago: Iperson = { name: "thiago jose", age: 22, email: "thiago@email.com" }
const larissa: typeof thiago = { name: "larissa santos", age: 22, email: "larissa@email.com" }


// keyof
const country = {
    "north": ["manaus", "piaui"],
    "northeast": ["pernambuco", "bahia", "paraiba"],
    "southeast": ["sao paulo", "rio", "minas"],
    "south": ["rio grande do sul", "parana"]
}
type Tregions = typeof country
const state: keyof Tregions = "northeast"