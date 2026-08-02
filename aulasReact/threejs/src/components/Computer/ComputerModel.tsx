import { Html, useGLTF } from "@react-three/drei"
import TextWriting from "../TextWriting/TextWriting"

export default function ComputerModel() {
    const object1 = useGLTF("/inclinedComputer.glb")
    const object3 = useGLTF("/darkTerminal.glb")

    return (
        // Removi a posição do primitive e passei para este group pai
        // Isso mantém o código limpo para o RigidBody herdar corretamente
        <group position={[0, 8, -1]}>
            <primitive scale={1.6} object={object1.scene}>
                <Html scale={0.37} transform position={[0, 0.65, -0.5]} rotation={[0.14, 0, 0]}>
                    <TextWriting />
                </Html>
                <group position={[0, 0.8, -0.5]} rotation={[0.14, 0, 0]}>
                    <primitive object={object3.scene} />
                </group> 
            </primitive>    
        </group>
    )
}

// Isso avisa o navegador para baixar o 3D antes mesmo do componente ser montado
useGLTF.preload("/inclinedComputer.glb")
useGLTF.preload("/darkTerminal.glb")