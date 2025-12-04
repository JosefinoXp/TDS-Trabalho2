import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import ListRender from './components/ListRenderComponent'
import NavBar from './components/NavBarComponent'


function App() {

  return (
    <>
      <NavBar/>

      <ListRender/>
    </>
  )
}

export default App
