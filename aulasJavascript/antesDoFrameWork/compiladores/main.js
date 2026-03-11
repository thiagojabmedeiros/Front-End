class User {
    constructor({ email }) {
        this.email = email
    }

    sendMessage() {
        console.log("sent message to:", this.email)
    }
}

let user = new User({ email: "bruno@email.com!"})
user.sendMessage()