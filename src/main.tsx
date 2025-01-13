import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastProvider } from './context/ToastContext'
import { Example } from './demo/Example'
import './styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastProvider>
      <Example />
    </ToastProvider>
  </React.StrictMode>,
) 