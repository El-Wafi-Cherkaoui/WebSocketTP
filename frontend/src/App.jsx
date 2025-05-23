import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WebSocketClient from './WebSocketClient'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      welcome
      <WebSocketClient/>
    </>
  )
}

export default App
