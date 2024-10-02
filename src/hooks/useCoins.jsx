import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import useSecureAxios from './useAxiosSecure'

const useCoins = () => {
  const secureAxios = useSecureAxios()
  const [coins, setCoins] = useState(0)

  useEffect(() => {
    let isMounted = true

    const fetchCoins = async () => {
      const coinData = await getCoin(secureAxios)
      if (isMounted) {
        setCoins(coinData)
      }
    }

    fetchCoins()

    return () => {
      isMounted = false
    }
  }, [secureAxios])

  return { coins }
}

const getCoin = async (secureAxios) => {
  try {
    const response = await secureAxios('/coins')

    return response?.data?.data?.coin
  } catch (error) {
    const errorMessage =
      error?.response?.data?.message || 'Error fetching coin data'
    toast.error(errorMessage, { duration: 2000 })
  }
}

export default useCoins
