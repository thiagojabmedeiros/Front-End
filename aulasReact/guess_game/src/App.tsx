import Header from "./components/Header"
import styles from "./app.module.css"

function App() {
  function handleRestartGame() {
    alert("restart")
  }
  return (
    <div>
      <main className={styles.container}>
        <Header current={3} max={10} onRestart={handleRestartGame}/ >
      </main>
    </div>
  )
}

export default App