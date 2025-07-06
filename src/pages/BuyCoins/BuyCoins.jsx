import useTheme from '@/hooks/useTheme'
import { useNavigate } from 'react-router-dom'

const BuyCoins = () => {
  const { theme } = useTheme()
  const navigate = useNavigate()
  const coinOptions = [
    { amount: 100, price: 1, description: 'Perfect for a quick top-up!' },
    { amount: 500, price: 5, description: 'Great value for regular users!' },
    {
      amount: 1000,
      price: 10,
      description: 'Best deal for serious enthusiasts!',
    },
  ]

  const handlePurchase = (option) => {
    navigate('/payment', { state: { ...option } })
  }

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center py-10 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'
      }`}
    >
      <div className="grid w-full max-w-4xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
        {coinOptions.map((option) => (
          <div
            key={option.amount}
            className={`relative flex transform flex-col items-center rounded-xl p-8 text-center transition duration-300 hover:scale-105
              ${
                theme === 'dark'
                  ? 'border border-yellow-500 bg-gray-800 text-white'
                  : 'border border-blue-500 bg-white text-gray-800'
              }
              shadow-xl hover:shadow-2xl
            `}
          >
            <div
              className="absolute left-0 top-0 h-full w-full rounded-xl opacity-20"
              style={{
                background:
                  theme === 'dark'
                    ? 'linear-gradient(to bottom right, #fbbf24, #f59e0b)'
                    : 'linear-gradient(to bottom right, #3b82f6, #2563eb)',
              }}
            ></div>
            <div className="relative z-10 flex flex-col items-center">
              <span className="mb-4 text-6xl">💰</span>
              <h2 className="mb-2 text-6xl font-extrabold text-yellow-500">
                {option.amount}
              </h2>
              <p className="mb-4 text-3xl font-bold">Coins</p>
              <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
                {option.description}
              </p>
              <p className="mb-8 text-5xl font-bold text-green-600">
                ${option.price}
              </p>
              <button
                onClick={() => handlePurchase(option)}
                className="rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-12 py-4 text-xl font-bold text-white shadow-lg transition duration-300 ease-in-out hover:from-blue-600 hover:to-blue-800"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCoins

