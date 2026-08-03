import ReactParallaxTilt from "react-parallax-tilt"


function CardTest() {
    return (

            <ReactParallaxTilt 
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            transitionSpeed={2000}
            scale={1.05}
            glareEnable={true}
            glareMaxOpacity={0.5}
            glareColor="#ffffff"
            glarePosition="all"
            >
                <div
                style={{
                width: "200px",
                height: "300px",
                background: "red",
                padding: "10px",
                transformStyle: "preserve-3d"
                }}>
                    <h1>Hello, world!</h1>
                    <h1>Hello, world!</h1>
                    <h1>Hello, world!</h1>
                    <h1>Hello, world!</h1>
                    <h1>Hello, world!</h1>
                    <h1>Hello, world!</h1>
                    <h1>Hello, world!</h1>
                </div>
            </ReactParallaxTilt>
    )
}

export default CardTest