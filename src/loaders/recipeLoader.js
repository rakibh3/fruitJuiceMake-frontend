import axios from 'axios'
import toast from 'react-hot-toast'

const RECIPE_API_URL = import.meta.env.VITE_API_URL

export const recipeLoader = async ({ params }) => {
  const { recipeId } = params

  const token = localStorage.getItem('accessToken')

  if (!token) {
    toast.error('You must be logged in to view this recipe.')
    throw new Response('Unauthorized', { status: 401 })
  }

  try {
    const response = await axios.get(`${RECIPE_API_URL}/recipe/${recipeId}`, {
      headers: {
        Authorization: token,
      },
    })

    return await response.data.data
  } catch (error) {
    console.error('Error fetching recipe:', error)
    if (error.response) {
      const status = error.response.status
      if (status === 404) {
        toast.error('Recipe not found.')
      } else if (status === 403) {
        toast.error('Access denied to this recipe.')
      } else {
        toast.error('Failed to fetch recipe. Please try again later.')
      }
    } else {
      toast.error('Network error. Please check your connection.')
    }

    throw new Response('Failed to load recipe', { status: 404 })
  }
}
