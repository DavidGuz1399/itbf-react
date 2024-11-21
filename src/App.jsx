import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { AppRouter } from './router'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='container mt-5'>
          <AppRouter />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
