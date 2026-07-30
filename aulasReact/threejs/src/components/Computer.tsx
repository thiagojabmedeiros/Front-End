import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, Html, OrbitControls, PresentationControls, Text } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/Addons.js"


function ComputerModel() {
    const object = useLoader(GLTFLoader, "/inclinedcomputerx.glb")

    return (
        <PresentationControls polar={[-0.6, 0.4]} azimuth={[-0.6, 0.6]}>
            <primitive 
            scale={1.5}
            position={[0,0.3,-0.6]}
            rotation={[0,-0.3,0]}
            object={object.scene} >
                <Html transform occlude position={[0,0.8,-0.48]} rotation={[0.14,0,0]}>
                    <div style={{ width: "90px", height: "50px",}}>
                         hey  man, how are you doing!
                    </div>
                </Html>
                <group 
                position={[0,0.8,-0.5]} 
                rotation={[0.14,0,0]}>
                    <Terminal />
                    
                    {/* <Text color="black" fontSize={0.15} position={[-1.05,0.35,0.015]} anchorY="top" anchorX="left" maxWidth={2.2}>-Hello, World!</Text>
                    <Text color="black" fontSize={0.15} position={[-1.05,0.15,0.015]} anchorY="top" anchorX="left" maxWidth={2.2}>-This is my web portifolio!</Text>
                    <Text color="black" fontSize={0.15} position={[-1.05,-0.045,0.015]} anchorY="top" anchorX="left" maxWidth={2.2}>-Here i have worked with typescript, react, tailwind, nextjs and threejs.</Text> */}

                    {/* /* <TypewriterText3D 
                    text="-Hello, World!"
                    pauseDurations={{ ',': 0.2 }} // opcional
                    enablePunctuationPauses={true}
                    color="yellow"
                    fontSize={0.15}
                    position={[-1.05,0.35,0.015]}
                    anchorY="top"
                    anchorX="left"
                    maxWidth={2.2}
                    />
                    <TypewriterText3D 
                    text="-This is my web portifolio!"
                    color="yellow"
                    fontSize={0.15}
                    position={[-1.05,0.15,0.015]}
                    anchorY="top"
                    anchorX="left"
                    pauseDurations={{ 'b': 0.2 }} // opcional
                    enablePunctuationPauses={true}
                    startDelay={1.5}
                    maxWidth={2.2}
                    />
                    <TypewriterText3D 
                    text="-Here i have worked with typescript, react, tailwind, nextjs and threejs."
                    color="yellow"
                    fontSize={0.15}
                    position={[-1.05,-0.045,0.015]}
                    anchorY="top"
                    anchorX="left"
                    cursor={true}
                    startDelay={3.5}
                    maxWidth={2.2}
                    pauseDurations={{ 'i': 0.2, ',': 0.2 }} // opcional
                    enablePunctuationPauses={true}
                    cursorBlinkAfterComplete={true}
                    /> */}
                </group> 
            </primitive>
        </PresentationControls>
    )
}

function Terminal() {
    const object = useLoader(GLTFLoader, "/lightTerminal.glb")

    return (
        <primitive object={object.scene} />
    )
}

function Computer() {
    return (
        <div
        style={{
            display: "flex",
            justifyContent: "right",
            width: "100vw",
            height: "100vh"
        }}
        >
            <Canvas
            style={{
                width: "50%",
                height:"100%"
            }}
            >
                <Environment preset="dawn"/>
                <ComputerModel />
                {/* <OrbitControls /> */}
            </Canvas>
        </div>
    )
}

export default Computer