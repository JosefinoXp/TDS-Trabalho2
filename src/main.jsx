import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Routes
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

// Componentes
import HomePage from './components/Portfolio/HomePage.jsx';
import ContatoPage from './components/SobreNos/ContatoPage.jsx';
import EquipamentosPage from './components/SobreNos/EquipamentosPage.jsx';
import PacotesPages from './components/SobreNos/PacotesPage.jsx';
import Processos_RegrasPage from './components/SobreNos/ProcessoRegrasPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",

    element: <App/>,

    children: [
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "Contato",
        element: <ContatoPage/>
      },
      {
        path: "Equipamentos",
        element: <EquipamentosPage/>
      },
      {
        path: "Pacotes",
        element: <PacotesPages/>
      },
      {
        path: "Processos_Regras",
        element: <Processos_RegrasPage/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
