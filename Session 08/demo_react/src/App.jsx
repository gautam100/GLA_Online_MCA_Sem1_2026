import { useState } from 'react'
import UserComponent from './UserComponent'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World!</h1>
      <UserComponent />
    </>
  )
}

export default App
