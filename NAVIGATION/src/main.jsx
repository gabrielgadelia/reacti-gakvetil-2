import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, routerProvider} from react-router

import Index from "./pages/index"
import Login from "./pages/login"
import Register from "./pages/regsiter"
import layout from './pages/layout'

const routor = createBrowserRouter([
    {
      path: "/",
      element: <layout/>,
      children: [
        
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
