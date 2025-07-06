import { loadStripe } from '@stripe/stripe-js'
import CheckoutForm from './CheckoutForm'
import { useLocation } from 'react-router-dom'
import { Elements } from '@stripe/react-stripe-js';

// Make sure to add your Stripe publishable key to your .env file
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const demoCard = {
  number: '4242 4242 4242 4242',
  expiry: '12/34',
  cvc: '123'
};

const Payment = () => {
  const location = useLocation()
  const paymentData = location.state

  return (
    <div className="min-h-[90vh] flex items-center justify-center">
      <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white flex items-center">
            <span className="mr-2">💳</span> Card Details
          </h3>
          <div className="space-y-2 font-mono text-sm">
            <p className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Number:</span>
              <span className="text-blue-600 dark:text-blue-400 font-bold">{demoCard.number}</span>
            </p>
            <p className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">Expiry:</span>
              <span className="text-blue-600 dark:text-blue-400 font-bold">{demoCard.expiry}</span>
            </p>
            <p className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-400">CVC:</span>
              <span className="text-blue-600 dark:text-blue-400 font-bold">{demoCard.cvc}</span>
            </p>
          </div>
        </div>

        <Elements stripe={stripePromise}>
          <CheckoutForm paymentData={paymentData} demoCard={demoCard} />
        </Elements>
      </div>
    </div>
  )
};

export default Payment

 