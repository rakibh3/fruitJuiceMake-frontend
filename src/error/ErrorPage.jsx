import { useRouteError, Link } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100 p-4 text-center dark:bg-gray-900">
      <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
        <h1 className="mb-4 text-7xl font-extrabold text-red-600 dark:text-red-500">
          Oops!
        </h1>
        <p className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
          <i>{error.statusText || error.message}</i>
        </p>
        {error.status === 401 && (
          <>
            <p className="mb-6 text-md text-gray-700 dark:text-gray-300">
              You are not authorized to view this page. Please log in.
            </p>
            <Link
              to="/signin"
              className="mt-6 inline-block rounded-md bg-green-600 px-6 py-3 text-lg font-medium text-white transition duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mr-4"
            >
              Login
            </Link>
          </>
        )}
        <Link
          to="/"
          className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-white transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
