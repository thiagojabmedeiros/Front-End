// comentários se escrevem com "//" no início da linha

/* 
comentários de multiplas 
linhas por que assim fica 
melhor visivelmente
*/

// ponto e vírgula é obrigatório

console.log("Hello, world!");
console.log("Olá, mundo!")

// variáveis sem valor
var user
console.log(user)

// variáveis com valor 
var email = "thiago123@gmail.com"
console.log(email)

email = "rodrigo2123@hotmail.com"
console.log(email)

// case senstive
var product = "Teclado gamer"
var Product = "Mouse gamer"

console.log(product)
console.log(Product)

/*
let e var são usadas para criar variáveis
porém o let é mais restritivo do que o var
não permitindo que haja repetições de let 
com o mesmo nome, substituindo-as.
Já o const é uma variável que permanecerá 
inalterada.
*/
const a = 10
console.log(a)

/*
Recomenda-se o uso de let e de const, pois
o uso de var possui escopo global e 
pode causar problemas podendo ser 
acessada da seguinte forma:
*/
{
    // escopo de bloco
    var x = 10
}
//escopo global
console.log(x)

// não podemos criar variáveis iniciando com número
// evitar usar acentos e caractéres especiais
// recomendado criar variáveis com nome inglês
// utilizar padrão camelCase:
let productName = "camel"
console.log(productName)
//utilizar padrão snake_case:
let product_name = "snake"
console.log(product_name)

// " ", ' ' e ` ` são maneiras de inserir uma string
console.log("eu me 'chamo' thiago")
console.log('eu me "chamo" thiago')

// ` ` permite o uso de "" e de '' dentro, além de formatar a quebra de linhas.
console.log(`
    eu
    'me' 
    "chamo"
    thiago
    `)   

//passar mais de um parâmetro
let username = "Thiago"
let mail = "thiagold987@tocktmail.com"

console.log(username, mail, "teste")

// concatenação
let message = "Olá, " + username + ". Você fez o resgistro com e-mail: " + mail + "."
console.log(message)

// template litarals
console.log(`Olá, ${username}. Você fez o registro com o e-mail ${mail}.`)


// Number 
console.log(typeof 5)

// inteiro
console.log(5)

// inteiro negativo
console.log(-5)

// float ou real
console.log(125.28)
console.log(typeof 125.28)

// not a number
console.log(123 / "rodrigo")


// booleans
console.log(true)
console.log(false)

let isLoading = true
let isNotLoading = false

console.log(isLoading)
console.log(isNotLoading)
console.log(typeof isLoading)
console.log(typeof isNotLoading)

// undefined
let emptiness
console.log("O valor é: " + emptiness)

// null
let nulo = null
console.log("O valor é: " + nulo)


// casting e conversão de tipos
let value = "9"
console.log(typeof value)
console.log(typeof Number(value))

let age = 18
console.log(typeof age) 
console.log(typeof age.toString())
console.log(typeof String(age))

/* no caso dos booleanos quando 
ocorre o casting de um numero 
para booleano, se há qualquer 
valor diferente de zero na variavel
o booleano será True, caso contrário
False.
*/
let option = 1
let option2 = 0
console.log(typeof option)
console.log(typeof option2)
console.log(Boolean(option2))
console.log(Boolean(option))
console.log(typeof Boolean(option))


// operadores aritméticos
let sum = 1 + 2
console.log(`Soma: ${sum}`)
let sub = 3 - 7 
console.log(`Subtracao: ${sub}`)
let times = 3 * 8
console.log(`Multiplicação: ${times}`)
let divide = 6 / 2
console.log(`Divisão: ${divide}`)
let power = 2 ** 4
console.log(`Elevado: ${power}`)

// incrementos e decrementos pelos operadores
let num = 10

// num = num + 1:
num++
console.log(num)

// num = num + 10:
num += 10
console.log(num)

// num = num * 2:
num *= 2
console.log(num)

// num = num - 1:
num--

// num = num - 1:
console.log(--num)

// num = num / 10
num /= 10
console.log(num)
