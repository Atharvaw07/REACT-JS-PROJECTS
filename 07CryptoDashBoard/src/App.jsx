import { useState } from 'react'


import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Dashboard/>
    </>
  )
}

export default App
