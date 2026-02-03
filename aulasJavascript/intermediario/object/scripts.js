console.log("hello, objects")

// creating an object
const object = {
    name: "Thiago",
    age: 100,
    // email: "thiago@mail.com",
    height: "110cm",
    adress: {
        street: "Avenida Brasil",
        postal_code: "12345-678",
        cordenates: {
            longitude: 21312412.98989,
            // latitude: 929412.21123,
        }
    },
    message: function() {
        console.log(`Hello, ${this.name}`)
    }

}

// calling properties
console.log(object.name)
console.log(object.email)
console.log(object.adress)
console.log(object.adress.postal_code)
console.log(`Thiago's location right now is:
    latitude = '${object.adress.cordenates.latitude}'
    longitude = '${object.adress.cordenates.longitude}'`)

// calling methods 
object.message()

// optional properties: "'property'?.'property'"
console.log(object.adress?.cordenates?.latitude)

// verifying if something is null or not
object.height = null
console.log(object.height ?? "the other is null")

object.height = "it's not null anymore"

console.log(object.height ?? "the other is null")




// creating objects as functions
/**
 * 
 * @param {String} name
 * @param {Number} price
 */
function createProduct(name, price) {
    const product = {}

    product.name = name
    product.price = price

    product.message = function () {
        console.log(`The product ${this.name} costs ${this.price}`)
    }
    
    return product
} 

const product1 = new createProduct("keyboard", 100)

product1.message()