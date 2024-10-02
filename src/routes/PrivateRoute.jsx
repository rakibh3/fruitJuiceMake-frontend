import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import PageLoader from '../components/PageLoader/PageLoader'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) return <PageLoader />

  if (user) {
    return children
  }

  return <Navigate to="/signin" state={{ from: location }} replace />
}

export default PrivateRoute
