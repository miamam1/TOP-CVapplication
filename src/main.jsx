import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {PersonalInformation, Input, Output } from './components/userInput'
import { Experiences } from './components/experienceInput'
import './index.css'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <PersonalInformation></PersonalInformation>
    <Experiences></Experiences>
  </StrictMode>,
)
