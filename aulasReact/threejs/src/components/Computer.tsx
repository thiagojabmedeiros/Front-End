import styles from "./computer.module.css"

import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, Html, OrbitControls, PresentationControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/Addons.js"

function Object() {
    const object = useLoader(GLTFLoader, "/inclinedComputer.glb")

    return (
        <PresentationControls polar={[-0.3,0.4]} azimuth={[-0.6,0.6]}>
            <primitive object={object.scene}>
                <Html className={styles.screen} occlude position={[0.023,0.62,-0.23]} transform distanceFactor={1.5} rotation={[0.07,0,0]}>
                    <div>
                        <h1>Hello, Three!</h1>
                    </div>
                </Html>
            </primitive>
        // </PresentationControls>
    )
}

function Computer() {
    return (
        <div className={styles.container}>
            <Canvas>
                <Environment preset="dawn"/>
                <directionalLight />
                    {/* <mesh position={[1,2,2]}>
                        <sphereGeometry args={[1,6,10]}/>
                        <meshPhongMaterial color="red" />
                    </mesh> */}
                <Object />
                {/* <OrbitControls/> */}
            </Canvas>
        </div>
    )
}

export default Computer