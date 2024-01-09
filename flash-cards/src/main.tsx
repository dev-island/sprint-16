import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import FlashCardsProvider from './context/flashCards'
import AppProvider from './context/application'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <FlashCardsProvider>
        <App />
      </FlashCardsProvider>
    </AppProvider>
  </React.StrictMode>,
)
