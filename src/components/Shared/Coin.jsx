import { BsCoin } from 'react-icons/bs'
import { memo } from 'react'
import useCoinBalance from '@/hooks/useTransferCoins'

const Coin = () => {
  const { coins } = useCoinBalance()

  return (
    <>
      <div className="flex items-center gap-2 rounded-2xl border-2 border-rose-500 px-[6px] py-[6px] dark:border-rose-400">
        <BsCoin className="h-5 w-5 text-yellow-500" />
        <span className="font-bold dark:text-white">{coins?.data.coin}</span>
      </div>
    </>
  )
}
export default memo(Coin)
