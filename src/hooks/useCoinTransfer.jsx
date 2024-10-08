import { useState } from 'react'
import axios from 'axios'
import { handleError } from '@/error/errorHandler'

export const useCoinTransfer = () => {
  const [isLoading, setIsLoading] = useState(false)

  const transferCoins = async (recipeId) => {
    setIsLoading(true)
    try {
      const token = localStorage.getItem('accessToken')

      const response = await axios.post(
        '/coin/transfer',
        { recipeId },
        {
          headers: {
            Authorization: token,
          },
        },
      )
      setIsLoading(false)
      return response?.data.data
    } catch (error) {
      setIsLoading(false)
      handleError(error)
    }
  }

  return { transferCoins, isLoading }
}
