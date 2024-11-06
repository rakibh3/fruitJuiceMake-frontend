import Coin from '@/components/Shared/Coin'
import useAuthentication from '@/hooks/useAuthentication'
import getPersonalizedGreeting from '@/utils/getPersonalizedGreeting'

const Header = () => {
  const { user } = useAuthentication()
  const greeting = getPersonalizedGreeting(user?.displayName)
  return (
    <header className="border-b border-gray-700 bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md">
      <div className="flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-100">{greeting}</h1>
        <Coin />
      </div>
    </header>
  )
}
export default Header
