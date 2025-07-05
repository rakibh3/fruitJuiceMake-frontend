
import useTheme from '@/hooks/useTheme';

const BuyCoins = () => {
  const { theme } = useTheme();
  const coinOptions = [
    { amount: 100, price: 1, description: 'Perfect for a quick top-up!' },
    { amount: 500, price: 5, description: 'Great value for regular users!' },
    { amount: 1000, price: 10, description: 'Best deal for serious enthusiasts!' },
  ];

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center py-10 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl px-4">
        {coinOptions.map((option) => (
          <div
            key={option.amount}
            className={`relative rounded-xl p-8 flex flex-col items-center text-center transform transition duration-300 hover:scale-105
              ${theme === 'dark' ? 'bg-gray-800 text-white border border-yellow-500' : 'bg-white text-gray-800 border border-blue-500'}
              shadow-xl hover:shadow-2xl
            `}
          >
            <div className="absolute top-0 left-0 w-full h-full rounded-xl opacity-20"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(to bottom right, #fbbf24, #f59e0b)'
                  : 'linear-gradient(to bottom right, #3b82f6, #2563eb)'
              }}
            ></div>
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-6xl mb-4">💰</span>
              <h2 className="text-6xl font-extrabold text-yellow-500 mb-2">
                {option.amount}
              </h2>
              <p className="text-3xl font-bold mb-4">Coins</p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{option.description}</p>
              <p className="text-5xl font-bold text-green-600 mb-8">
                ${option.price}
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-12 py-4 rounded-full text-xl font-bold shadow-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCoins;
