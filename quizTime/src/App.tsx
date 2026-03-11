import { useState } from 'react'
import './App.css'
import NavBar from './Page/NavBar/NavBar.tsx'
import Form from './Page/MainPages/Form.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <Form />
    </div>
  )
}

export default App
