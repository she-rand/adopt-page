import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header title="Adopt a doggo"/>
    </>
  )
}

export default App
