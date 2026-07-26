import Start from "./sections/Start"
import Middle from "./sections/Middle"
import End from "./sections/End"
import Button from "./components/button"

function App() {

  return (
    <div className="flex flex-col gap-3
    items-center justify-center 
    w-100% h-screen 
    bg-amber-300 dark:bg-blue-900 m-10 border-2 border-amber-700 rounded">
      <Button />
      <Start />
      <Middle />
      <End />
    </div>
  )
}

export default App