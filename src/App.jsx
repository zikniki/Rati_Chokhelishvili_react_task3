import { useState } from 'react'
import './App.css'
import Organisms from './components/organisms/organismsPart.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <Organisms />
      </section>
    </>
  )
}

export default App
