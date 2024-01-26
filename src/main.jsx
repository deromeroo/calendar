import React from 'react'
import ReactDOM from 'react-dom/client'

import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/800.css'

import './styles.css'

import { CalendarApp } from './CalendarApp'
import { Background } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Background />
    <CalendarApp />
  </React.StrictMode>
)
