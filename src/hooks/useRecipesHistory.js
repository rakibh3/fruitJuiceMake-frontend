import { useState, useEffect } from 'react'
import axios from 'axios'

const useRecipesHistory = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUserRecipesHistory = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/recipes/history/user`,
          {
            headers: {
              Authorization: localStorage.getItem('accessToken'),
            },
          },
        )

        setData(response.data.data)
      } catch (err) {
        console.error('Error fetching user recipes history:', err)
        setError(err.response ? err.response.data : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchUserRecipesHistory()
  }, [])

  return { data, loading, error }
}

export default useRecipesHistory
