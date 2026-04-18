import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { useEffect } from 'react'
import News from './Components/News'

function App() {
  return(
    <div>
      <Header />
      <News />
      <Footer />
    </div>
  )
}

export default App

