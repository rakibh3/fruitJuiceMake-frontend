import toast from 'react-hot-toast'

export const handleError = (error) => {
  if (error.response) {
    // Server responded with a status other than 200
    toast.error(
      error.response.data.message || 'An error occurred. Please try again.',
      {
        duration: 4000,
      },
    )
    return error.response.data || 'An error occurred. Please try again.'
  } else if (error.request) {
    // Request was made but no response received
    console.error('No Response:', error.request)
    return 'No response received from the server.'
  } else {
    // Something else happened
    console.error('Error', error.message)
    return error.message
  }
}
