import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import Hero from './components/ui/custom/hero.jsx'
import Footer from './components/ui/custom/Footer'


function App() {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <Hero />
    </div>
         <Footer/>
      <div>

      </div>
   
    </>
  )
}

export default App
