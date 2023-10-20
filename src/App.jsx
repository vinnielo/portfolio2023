import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Nav from './components/NavBar'

import Footer from './components/Footer'

function App() {
  const [current, setCurrent] = useState("Home");


  return (
    <>
   <Nav current={current} setCurrent={setCurrent} />
    <Outlet />
    <Footer current={current} setCurrent={setCurrent} />
    </>
  )
}

export default App
