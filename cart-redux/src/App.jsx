import { useState } from 'react'
import NavBar from './Components/NavBar'
import Shop from './Components/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Shop />
    </>
  )
}

export default App
