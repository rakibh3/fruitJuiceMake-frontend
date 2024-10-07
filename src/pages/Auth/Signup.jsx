import { FaRegEnvelope, FaRegUser } from 'react-icons/fa'
import { TbPassword } from 'react-icons/tb'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'
import { usersRegisterApi } from '@/api/authApi'
import { useCallback } from 'react'

const Signup = () => {
  const navigate = useNavigate()
  const {
    createUserWithCredential,
    updateUserProfile,
    deleteUserAccount,
    logout,
  } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm()

  const onSubmit = useCallback(
    async (data) => {
      const { name, email, password } = data
      let user = null

      try {
        // Check if user exists in the database
        const userData = {
          displayName: name,
          email: email,
          photoURL: null,
        }
        const response = await usersRegisterApi(userData)

        if (!response || !response.success) {
          throw new Error(`Failed to register user`)
        }

        const token = response.data.token
        localStorage.setItem('accessToken', token)

        //Create user with email and password in Firebase
        const userCredential = await createUserWithCredential(email, password)
        user = userCredential.user

        if (user) {
          // Update user profile in Firebase
          await updateUserProfile(name)

          // Show success message and reset form
          toast.success(response.message, { duration: 1000 })
          reset()
          logout()
          navigate('/')
          toast.success('You can login now', { duration: 3000 })
        }
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        if (user) await deleteUserAccount(user)
        // toast.error(`${(error.message, { duration: 5000 })}`)
        toast.error('Failed to register user', { duration: 2000 })
      }
    },
    [
      createUserWithCredential,
      updateUserProfile,
      deleteUserAccount,
      navigate,
      reset,
      logout,
    ],
  )

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-2">
      <div className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <div className="flex w-full max-w-4xl flex-col rounded-2xl bg-white shadow-lg md:flex-row">
          {/* Sign In */}
          <div className="hidden w-2/5 md:flex">
            <div className="rounded-bl-2xl rounded-tl-2xl bg-primary/80 px-12 py-36 text-white">
              <h2 className="mb-1 text-2xl font-bold tracking-wide">
                Welcome Back
              </h2>
              <div className="mb-2 inline-block w-16 border-2 border-white"></div>
              <p className="mb-4">
                Fill up personal information and start journey with us
              </p>
              <Link
                to="/signin"
                className="inline-block rounded-full border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-primary/80"
              >
                Sign in
              </Link>
            </div>
          </div>

          {/* Sign Up */}

          <div className="w-full p-5 md:w-3/5">
            <div className="py-10">
              <h2 className="mb-1 text-2xl font-medium tracking-wide text-primary/80 sm:text-3xl">
                Create an account
              </h2>
              <div className="mb-3 inline-block w-16 border-2 border-primary/80"></div>
              {/* Sign up form */}
              <div className="flex flex-col items-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <div className="max-w-sx mb-6 flex w-full items-center rounded-lg bg-gray-100 p-1">
                      <FaRegUser className="m-2 text-gray-400" />
                      <input
                        type="text"
                        {...register('name', {
                          required: true,
                          pattern: /^[A-Za-z\s]+$/,
                        })}
                        placeholder="Name"
                        className="w-full bg-gray-100 py-3 pl-1 text-sm outline-none"
                      />
                    </div>
                    {errors?.name && (
                      <p className="mb-3 ml-1 mt-[-1.25rem] text-start text-xs text-red-500">
                        Name is required & contain only letters!
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="max-w-sx mb-6 flex w-full items-center rounded-lg bg-gray-100 p-1">
                      <FaRegEnvelope className="m-2 text-gray-400" />
                      <input
                        type="email"
                        {...register('email', {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        })}
                        placeholder="Email"
                        className="w-full bg-gray-100 py-3 pl-1 text-sm outline-none"
                      />
                    </div>
                    {errors?.email && (
                      <p className="mb-3 ml-1 mt-[-1.25rem] text-start text-xs text-red-500">
                        Email is required or invalid
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="max-w-sx mb-6 flex w-full items-center rounded-lg bg-gray-100 p-1">
                      <TbPassword className="m-2 text-gray-400" />
                      <input
                        type="password"
                        {...register('password', {
                          required: true,
                          minLength: 8,
                        })}
                        placeholder="Password"
                        className="w-full bg-gray-100 py-3 pl-1 text-sm outline-none"
                      />
                    </div>

                    {errors?.password && (
                      <p className="mb-3 ml-1 mt-[-1.25rem] text-start text-xs text-red-500">
                        Password is required and must be at least 8 characters
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="block w-full max-w-xs rounded-lg bg-primary/80 p-3 text-center font-semibold text-white hover:bg-primary/90"
                  >
                    Sign up
                  </button>
                </form>
                <p className="mt-2 text-center text-xs sm:px-6 dark:text-gray-600">
                  Already have an account?
                  <Link
                    rel="noopener noreferrer"
                    to="/signin"
                    className="ml-1 font-semibold no-underline dark:text-gray-800"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Signup
