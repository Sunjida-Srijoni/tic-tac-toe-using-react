import { useState } from 'react'

import './App.css'
import Square from './Square'
import Board from './Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>TIC-TAC-TOE</h1>
      <Board></Board>
      
      
    </>
  )
}

export default App
