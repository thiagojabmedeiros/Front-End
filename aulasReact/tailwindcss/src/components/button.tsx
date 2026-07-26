import { useState, useEffect } from "react";

function Button() {
    const [darkTheme, setDarktheme] = useState(false)
    useEffect(() => {
        const htmlTag = document.documentElement
        if (darkTheme) {
            htmlTag.classList.add("dark")
        } else {
            htmlTag.classList.remove("dark")
        }
    }, [darkTheme])

    const [estados, setEstado] = useState("ligado")
    function mudarEstado() {
        if (estados === "desligado") {
            setEstado("ligado")
        }
        else if (estados === "ligado") {
            setEstado("desligado")
        }
        setDarktheme(!darkTheme)
    }

    return <button className="h-fit w-fit border-2 border-blue-700 text-2xl text-red-950 cursor-pointer" onClick={() => mudarEstado()}>
        {estados}
    </button>
}

export default Button