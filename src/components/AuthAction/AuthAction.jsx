import { useNavigate } from 'react-router-dom'

const AuthAction = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="flex items-center gap-2">
        <button
          className="hidden rounded-md border-2 px-4 py-2 font-medium text-gray-600 shadow-md hover:bg-gray-100 sm:block dark:text-gray-300 dark:hover:bg-gray-700"
          onClick={() => navigate('/signup')}
        >
          Get Started
        </button>
        <button
          className="rounded-md bg-primary px-5 py-2 font-medium text-white shadow-lg"
          onClick={() => navigate('/signin')}
        >
          Login
        </button>
      </div>
    </div>
  )
}
export default AuthAction
