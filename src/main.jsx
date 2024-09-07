import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {MainPage} from './components/userInput'
import { Experiences } from './components/experienceInput'
import './index.css'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <MainPage></MainPage>
  </StrictMode>,
)
