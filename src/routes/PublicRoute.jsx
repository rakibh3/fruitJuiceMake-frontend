import { Navigate } from 'react-router-dom'
import useAuthentication from '@/hooks/useAuthentication'

const PublicRoute = ({ children }) => {
  const { user } = useAuthenticationentication()

  if (user) {
    return <Navigate to="/" replace />
  }

  return children
}
export default PublicRoute
