import { Html, PresentationControls, useGLTF } from "@react-three/drei"
import TextWriting from "../TextWriting/TextWriting"

function ComputerModel() {
    const object1 = useGLTF("/inclinedComputer.glb")
    // const object2 = useGLTF("/lightTerminal.glb")
    const object3 = useGLTF("/darkTerminal.glb")

    return (
        <PresentationControls snap={true} polar={[-0.6, 0.4]} azimuth={[-0.6, 0.6]}>
            <primitive scale={1.5} position={[0,0.3,-0.6]} rotation={[0,-0.3,0]} object={object1.scene} >
                <Html scale={0.37} transform occlude position={[0,0.65,-0.5]} rotation={[0.14,0,0]}>
                    <TextWriting />
                </Html>
                <group position={[0,0.8,-0.5]} rotation={[0.14,0,0]}>
                    {/* <primitive object={object2.scene} />  */}
                    <primitive object={object3.scene} />
                </group> 
            </primitive>
        </PresentationControls>
    )
}

export default ComputerModel