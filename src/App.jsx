import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBarComponent'
import { Outlet } from 'react-router';
import MensagemHorario from './hooks/MensagemHorario';



function App() {

  return (
    <>
      {/* <NavBar/> */}
      <MensagemHorario></MensagemHorario>
      {/* <Outlet/> */}
    </>
  )
}

export default App
