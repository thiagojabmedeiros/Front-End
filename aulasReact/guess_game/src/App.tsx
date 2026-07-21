import styles from "./app.module.css"

import Header from "./components/Header"
import Tip from "./components/Tip"
import Letter from "./components/Letter"


function App() {
  function handleRestartGame() {
    alert("restart")
  }
  return (
    <div>
      <main className={styles.container}>
        <Header current={3} max={10} onRestart={handleRestartGame} />
        <Tip tip="Uma das linguagens de programação mais dinâmicas" />
        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="" />
          <Letter value="" />
          <Letter value="R" />
          <Letter value="R" />
          <Letter value="R" />
        </div>

        <h4>Palpite</h4>

        <div></div>
      </main>
    </div>
  )
}

export default App