import styles from "./computer.module.css"

import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, PresentationControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/Addons.js"


function ComputerModel() {
    const object = useLoader(GLTFLoader, "/inclinedcomputerx.glb")

    return (
        <PresentationControls polar={[-0.6, 0.4]} azimuth={[-0.6, 0.6]}>
            <primitive scale={1.25} object={object.scene}>
                <group 
                position={[0,0.8,-0.5]} 
                rotation={[0.14,0,0]}>
                    <Terminal />
                </group>
            </primitive>
        </PresentationControls>
    )
}
function Terminal() {
    const object = useLoader(GLTFLoader, "/terminal.glb")

    return (
        <primitive object={object.scene} />
    )
}

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