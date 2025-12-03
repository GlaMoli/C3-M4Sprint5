import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CountryProvider } from './contexts/CountryContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>   {/* 👈 envuelve toda la app */}
      <CountryProvider>
        <App />
      </CountryProvider>
    </BrowserRouter>
  </StrictMode>,
)

