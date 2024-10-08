import { useState } from 'react'
import { handleError } from '@/error/errorHandler'
import useSecureAxios from './useAxiosSecure'

export const useCoinTransfer = () => {
  const secureAxios = useSecureAxios()
  const [isLoading, setIsLoading] = useState(false)

  const transferCoins = async (recipeId) => {
    setIsLoading(true)
    try {
      const response = await secureAxios.post('/coin/transfer', { recipeId })
      setIsLoading(false)
      return response?.data.data
    } catch (error) {
      setIsLoading(false)
      handleError(error)
    }
  }

  return { transferCoins, isLoading }
}
