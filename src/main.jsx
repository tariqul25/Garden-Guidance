import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/route.jsx'
import { RouterProvider } from 'react-router'
import GardenProvider from './Provider/GardenProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <GardenProvider>
    <RouterProvider router={router}></RouterProvider>
   </GardenProvider>
  </StrictMode>,
)
