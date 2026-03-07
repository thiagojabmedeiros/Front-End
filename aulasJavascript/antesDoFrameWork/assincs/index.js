console.log("hello, assync")

function asyncFunction() {
    return new Promise((resolve, reject) => {
        let isSuccess = true

        setTimeout(() => {
            if (isSuccess) {
                resolve("Sucess")
            } else {
                reject("Error")
            }
        }, 1500)
    }) 
}

asyncFunction().then((response) => {
    console.log("Sucess:", response)
}).catch((error) => {
    console.log("Error:", error)
}).finally(() => {
    console.log("Async function has finished!")
})

async function fetch() {
    try {
        const response = await asyncFunction()
        console.log(response)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Async function has finished!")
    }

}
fetch()