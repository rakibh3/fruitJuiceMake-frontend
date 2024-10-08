import { useContext } from 'react'
import { CoinsContext } from '@/providers/CoinProvider'

const useCoinContext = () => {
  return useContext(CoinsContext)
}
export default useCoinContext
