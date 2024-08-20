import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar/Navbar'
import ContactHeader from './component/ContactHeader/ContactHeader'
import ContactForm from './component/ContactForm/ContactForm'
import Button from './component/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <ContactHeader/>
      <ContactForm/>
      <Button/>
    </>
  )
}

export default App
