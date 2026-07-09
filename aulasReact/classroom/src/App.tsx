import "./global.css"
import { Button } from "./components/button"
import { useState } from "react"

import styles from "./app.module.css"

// import { useMessage } from "./hooks/useMessage"

function App() {
    // const {show} = useMessage({name: "thiago", age: 22})
    const [count, setCount] = useState(0)

    function addN(){
        setCount(count + 1)
    }
    function subN() {
        if (count > 0) {
        setCount(count - 1)
        }
    }
    return ( 
    <div className={styles.container}>
        <Button name="adicionar"  onClick={addN}/>
        <span>{count}</span>
        <Button name="remover" onClick={subN}/>
    </div>
    )
}

export { App }