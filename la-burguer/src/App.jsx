import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Hamburguer from './components/Hamburguer'
import Alitas from './components/Alitas'
import Snaks from './components/Snaks'
import Drinks from './components/Drinks'
import Visit from './components/Visit'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <div id='home'>
          <Home/>
        </div>
        <div id='hamburguer'>
          <Hamburguer/>
        </div>
        <div id='wings'>
        <Alitas/>
        </div>
        <div id='snaks'>
      <Snaks/>
        </div>
        <div id='drinks'>
        <Drinks/>
        </div>
        <div id='visit'>
        <Visit/>
        </div>
        <div id='footer'>
          <Footer/>
        </div>
      </main>
    </div>
  )
}

export default App