export class Greets {
    hello() {
        console.log("hello, modules")
    }
    bye(a) {
       for (let i = 1; i <= a; i++) {
        console.log(`${i}° Bye!`)
       } 
    }
}