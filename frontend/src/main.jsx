import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SharedProvider } from './context/InfoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SharedProvider>
      <App />
    </SharedProvider>
  </React.StrictMode>,
)
