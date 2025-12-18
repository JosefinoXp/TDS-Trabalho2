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
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
