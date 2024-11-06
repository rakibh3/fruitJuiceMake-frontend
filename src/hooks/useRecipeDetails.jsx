import { useState } from 'react'
import useSecureAxios from './useSecureAxios'
import { handleError } from '@/error/errorHandler'

export const useRecipeDetails = () => {
  const secureAxios = useSecureAxios()
  const [isLoading, setIsLoading] = useState(false)

  const getRecipeDetails = async (recipeId) => {
    setIsLoading(true)

    try {
      const response = await secureAxios.get(`/recipe/${recipeId}`)
      setIsLoading(true)
      return response?.data.data
    } catch (error) {
      setIsLoading(false)

      handleError(error)
    }
  }

  return { getRecipeDetails, isLoading }
}
