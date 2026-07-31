import TypewriterComponent, { TypewriterClass } from "typewriter-effect"
import Computer from "./components/Computer/Computer"

function App() {

  return (
    <div className="container">
      <div className="hero">
        <div>
          <h1>SOFTWARE</h1>
          <h1>DEVELOPER</h1>
          <h1>THIAGO M.©</h1>
        </div>
        <p>Sou um desenvolvedor voltado à criação de aplicações robustas e escaláveis, aplicando boas práticas de arquitetura de software e código limpo. Focado em entregar soluções de maior valor ao usuário.</p>
      </div>
      <div className="fundo3d">
        <Computer />
      </div>
    </div>
  )
}

export default App
