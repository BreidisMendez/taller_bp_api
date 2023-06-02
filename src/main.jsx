import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PersonajesMarvel from './components/PersonajesMarvel.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersonajesMarvel />
  </React.StrictMode>,
)
