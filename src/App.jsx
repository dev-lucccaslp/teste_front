import { Toaster } from 'sonner'
import { AppRoutes } from './routes/routes'
import { AuthProvider } from './context/AuthContext'

function App() {

  return (
    <AuthProvider>
      <Toaster />
      <AppRoutes />
    </AuthProvider>
  )
}

export default App
