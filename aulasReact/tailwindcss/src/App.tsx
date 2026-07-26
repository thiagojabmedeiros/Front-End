import Start from "./sections/Start"
import Middle from "./sections/Middle"
import End from "./sections/End"

function App() {

  return (
    <div className="flex flex-col gap-3
    items-center justify-center 
    w-100% h-screen 
    bg-amber-300 m-10 border-2 border-amber-700 rounded">
      <Start />
      <Middle />
      <End />
    </div>
  )
}

export default App