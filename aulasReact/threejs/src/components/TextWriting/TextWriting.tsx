import styles from "./styles.module.css"
import TypewriterComponent from "typewriter-effect"
import type { TypewriterClass } from "typewriter-effect";


function TextWriting() {
    return (
        <div className={styles.container}>
            <TypewriterComponent
            onInit={(typewriter:  TypewriterClass) => {
                typewriter
                .typeString("-Hello, World!")
                .pauseFor(200)
                .typeString("<br/>-")
                .pauseFor(500)
                .typeString("This is my web portfolio.")
                .pauseFor(300)
                .typeString("<br/>-")
                .pauseFor(600)
                .typeString("Here i have worked with javascr")
                .pauseFor(600)
                .deleteChars(7)
                .pauseFor(500)
                .typeString("typescript, react, ")
                .pauseFor(400)
                .typeString("tailw")
                .pauseFor(300)
                .typeString("ind, nextjs and")
                .pauseFor(300)
                .typeString(" threejs.")
                .start()
            }}
            />
        </div>
    )
}

export default TextWriting