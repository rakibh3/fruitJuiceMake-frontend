import { createContext, useEffect, useState } from 'react'
import useAuth from '@/hooks/useAuth'
import useCoins from '@/hooks/useCoins'

export const CoinsContext = createContext(0)

const CoinProvider = ({ children }) => {
  const { user } = useAuth()
  const { coins: initialCoins, loading } = useCoins()
  const [coins, setCoins] = useState(0)
  console.log('initialCoins', initialCoins, 'coins', coins)

  useEffect(() => {
    if (user) {
      setCoins(initialCoins)
    } else {
      setCoins(0)
    }
  }, [initialCoins, user])

  const updateCoins = (amount) => {
    setCoins((prevCoins) => prevCoins + amount)
  }

  const coinsValue = {
    coins,
    updateCoins,
    loading,
  }

  return (
    <CoinsContext.Provider value={coinsValue}>{children}</CoinsContext.Provider>
  )
}

export default CoinProvider
