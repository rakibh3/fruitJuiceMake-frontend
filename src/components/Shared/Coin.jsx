import { BsCoin } from 'react-icons/bs'
import { memo } from 'react'
import useCoins from '@/hooks/useCoins'

const Coin = () => {
  const { coins } = useCoins()

  return (
    <>
      <div className="flex items-center gap-2 rounded-2xl border-2 border-rose-500 px-[6px] py-[6px]">
        <BsCoin className="h-5 w-5 text-yellow-500" />
        <span className="font-bold text-gray-800">{coins}</span>
      </div>
    </>
  )
}
export default memo(Coin)
