import { handleError } from '@/error/errorHandler'
import axios from 'axios'
import toast from 'react-hot-toast'

const RECIPE_API_URL = import.meta.env.VITE_API_URL

export const recipeLoader = async ({ params }) => {
  const { recipeId } = params

  const token = localStorage.getItem('accessToken')

  if (!token) {
    toast.error('Login to view recipe')
    throw new Response('Unauthorized', { status: 401 })
  }

  try {
    const response = await axios.get(`${RECIPE_API_URL}/recipe/${recipeId}`, {
      headers: {
        Authorization: token,
      },
    })

    return response.data.data
  } catch (error) {
    handleError(error)
  }
}
