import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import usePublicAxios from './useAxiosPublic'

const useRecipes = () => {
  const publicAxios = usePublicAxios()
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    let isMounted = true

    const fetchRecipes = async () => {
      const recipesData = await getRecipes(publicAxios)
      if (isMounted) {
        setRecipes(recipesData)
      }
    }

    fetchRecipes()

    return () => {
      isMounted = false
    }
  }, [publicAxios])

  return { recipes }
}

const getRecipes = async (publicAxios) => {
  try {
    const response = await publicAxios.get('/recipes')
    return response?.data?.data
  } catch (error) {
    const errorMessage =
      error?.response?.data?.message || 'Error fetching recipes'
    toast.error(errorMessage, { duration: 2000 })
  }
}

export default useRecipes
