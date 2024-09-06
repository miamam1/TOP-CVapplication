import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {PersonalInformation, Input, Output } from './components/userInput'
import './index.css'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <PersonalInformation></PersonalInformation>
  </StrictMode>,
)
