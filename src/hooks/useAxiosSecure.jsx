import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import useAuth from './useAuth'

const secureAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

const useSecureAxios = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()

  useEffect(() => {
    // Add a request interceptor to axiosSecure for secure API calls
    const requestInterceptor = secureAxios.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem('accessToken')
        config.headers.authorization = token
        return config
      },
      function (error) {
        return Promise.reject(error)
      },
    )

    // Interceptor for handling the response 401 and 403
    const responseInterceptor = secureAxios.interceptors.response.use(
      function (response) {
        return response
      },
      async (error) => {
        const status = error.response.status

        if (
          status === 401 ||
          status === 403 ||
          // If response success is false
          error.response.data.success === false
        ) {
          logout()
          navigate('/')
        }
        return Promise.reject(error)
      },
    )

    // Cleanup function to eject the interceptors
    return () => {
      secureAxios.interceptors.request.eject(requestInterceptor)
      secureAxios.interceptors.response.eject(responseInterceptor)
    }
  }, [logout, navigate])

  return secureAxios
}

export default useSecureAxios
