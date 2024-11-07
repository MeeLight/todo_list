import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// App
import App from './app'

// Base Stylesheet
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
