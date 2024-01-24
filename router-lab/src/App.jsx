import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import AllRoutes from './AllRoutes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <AllRoutes />
    </BrowserRouter>
    </>
  )
}

export default App
