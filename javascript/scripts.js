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