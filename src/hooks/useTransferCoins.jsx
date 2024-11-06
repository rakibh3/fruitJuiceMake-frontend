import useSWR from 'swr'
import { handleError } from '@/error/errorHandler'
import axios from 'axios'

const fetcher = async (url, token) => {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: token,
      },
    })
    return response?.data
  } catch (error) {
    handleError(error)
  }
}

const useCoinBalance = () => {
  const token = localStorage.getItem('accessToken')

  const {
    data: coins,
    error,
    isLoading,
    mutate,
  } = useSWR([`${import.meta.env.VITE_API_URL}/coins`, token], ([url, token]) =>
    fetcher(url, token),
  )
  return { coins, error, isLoading, mutate }
}

export default useCoinBalance
