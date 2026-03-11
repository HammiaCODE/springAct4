import { useState } from 'react'
import './App.css'
import NavBar from './Page/NavBar/NavBar.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
    </div>
  )
}

export default App
