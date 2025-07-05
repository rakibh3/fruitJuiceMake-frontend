import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from '@/routes/routes'
import AuthProvider from '@/providers/AuthProvider'
import ThemeProvider from '@/providers/ThemeProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top-center" reverseOrder={true} />
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)
