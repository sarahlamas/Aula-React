import { useState } from 'react'
import {Routes, Route, Link} from 'react-router'
import './App.css'

import Home from './pages/home'
  import Sobre from './pages/Sobre'


function App() {
  const [count, setCount] = useState(0)

  
  return (
    <div id="container">
      <h1>Seja bem vindos ao React</h1>
      <nav>
        <LinK to='/'>Home</LinK>
        <LinK to='/sobre'><Sobre></Sobre></LinK>
      </nav>
      <hr/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        </Routes>
    </div>
      
  )
}

export default App
