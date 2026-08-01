import { Html, useGLTF } from "@react-three/drei"
import TextWriting from "../TextWriting/TextWriting"


function ComputerModel() {
    const object1 = useGLTF("/inclinedComputer.glb")
    const object3 = useGLTF("/darkTerminal.glb")

    return (
        <primitive scale={1.5} position={[0,0,-0.6]} object={object1.scene} >
            <Html scale={0.37} transform occlude position={[0,0.65,-0.5]} rotation={[0.14,0,0]}>
                <TextWriting />
            </Html>
            <group position={[0,0.8,-0.5]} rotation={[0.14,0,0]}>
                <primitive object={object3.scene} />
            </group> 
        </primitive>    
    )
}

export default ComputerModel