import { useState } from 'react'
import Login from './components/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Listado from './components/Listado'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Login />} />
            <Route path='/listado' element={<Listado />} />
        </Routes>
   
      </BrowserRouter>
    </>
  )
}

export default App
