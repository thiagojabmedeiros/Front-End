import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"

import styles from "./styles.module.css"
import ComputerModel from "./ComputerModel"

function Computer() {
    return (
        <div className={styles.container}>
            <Canvas>
                <Environment preset="dawn"/>
                <ComputerModel />
            </Canvas>
        </div>
    )
}

export default Computer