import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WebSocketClient from './WebSocketClient'
import Map from './Map'
import Login from './Login'
import OnlineUsers from './OnlineUsers'

function App() {
  const [username, setUsername] = useState(null)

  return (
    <>
        <Login setUsername={setUsername}/>
        <WebSocketClient />
        <div className='board'>
            <Map username={username}/>
            <OnlineUsers/>
        </div>

    </>
  )
}

export default App
