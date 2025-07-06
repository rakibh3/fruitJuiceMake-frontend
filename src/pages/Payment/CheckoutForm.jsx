import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import useSecureAxios from '@/hooks/useSecureAxios'
import useAuthentication from '@/hooks/useAuthentication'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { mutate } from 'swr'

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      '::placeholder': {
        color: '#aab7c4',
      },
      backgroundColor: 'white',
    },
    invalid: {
      color: '#9e2146',
      iconColor: '#9e2146'
    },
  },
  hidePostalCode: true,
};

const CheckoutForm = ({ paymentData, demoCard }) => {
  const stripe = useStripe()
  const elements = useElements()
  const secureAxios = useSecureAxios()
  const { user } = useAuthentication()
  const [clientSecret, setClientSecret] = useState('')
  const [cardError, setCardError] = useState('')
  const [processing, setProcessing] = useState(false)
  const [isHighlighted, setIsHighlighted] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (paymentData?.price > 0) {
      secureAxios
        .post('/create-payment-intent', { price: paymentData?.price })
        .then((res) => {
          setClientSecret(res.data.data.clientSecret)
        })
    }
  }, [paymentData, secureAxios])

 

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)
    if (card === null) {
      return
    }

    const { error: stripeError } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (stripeError) {
      setCardError(stripeError.message)
      return
    } else {
      setCardError('')
    }

    setProcessing(true)

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      },
    )

    if (confirmError) {
      setCardError(confirmError.message)
      setProcessing(false)
      return
    }

    if (paymentIntent.status === 'succeeded') {
      const paymentInfo = {
        ...paymentData,
        transactionId: paymentIntent.id,
        date: new Date(),
      }

      try {
        await secureAxios.post('/coin/buy', paymentInfo)
        toast.success('Payment successful!')
        mutate([`${import.meta.env.VITE_API_URL}/coins`, localStorage.getItem('accessToken')])
        navigate('/')
      } catch (error) {
        toast.error('Failed to update coin balance.')
      }
    }

    setProcessing(false)
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      
      
      <div className={`relative rounded-md ${isHighlighted ? 'ring-2 ring-blue-500' : ''}`}>
        <CardElement
          options={CARD_ELEMENT_OPTIONS}
          className={`w-full border ${
            isHighlighted ? 'border-blue-500' : 'border-gray-300'
          } rounded-md p-4 bg-white shadow-sm transition-all duration-200`}
        />
      </div>

      <button
        type="submit"
        disabled={!stripe || !clientSecret || processing}
        className="mt-4 w-full rounded-md bg-primary px-4 py-2 text-white disabled:opacity-50 transition-opacity duration-200"
      >
        {processing ? 'Processing...' : `Pay $${paymentData?.price}`}
      </button>
      {cardError && <p className="mt-2 text-sm text-red-600">{cardError}</p>}
    </form>
  )
}

export default CheckoutForm
