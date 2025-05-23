import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WebSocketClient from './WebSocketClient'
import Map from './Map'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WebSocketClient/>
      <Map/>
    </>
  )
}

export default App
