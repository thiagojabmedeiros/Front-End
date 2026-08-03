import TypewriterComponent, { TypewriterClass } from "typewriter-effect"

function TextWrite() {
    return (
        <div
        style={{
            width: "200px",
            height: "300px",
            background: "deeppink",
            padding: "10px"
        }}>
            <TypewriterComponent 
            onInit={(type: TypewriterClass) => {
                type
                .typeString("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta veritatis explicabo accusamus aspernatur rem similique atque voluptatibus, et, iusto quaerat possimus placeat sunt? Odit ea fugiat sit quam nostrum et.")
                .start()
            }}/>
        </div>
    )
}

export default TextWrite