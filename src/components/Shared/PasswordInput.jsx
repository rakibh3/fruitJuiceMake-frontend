import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { TbPassword } from 'react-icons/tb'

const PasswordInput = ({ register, errors }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev)
  }

  return (
    <>
      <div className="mb-6 flex w-full items-center rounded-lg bg-gray-100 p-1 dark:bg-gray-700">
        <TbPassword className="m-2 text-gray-400" />
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          {...register('password', {
            required: true,
            minLength: 8,
          })}
          placeholder="Password"
          className="w-full bg-gray-100 py-3 pl-1 text-sm outline-none dark:bg-gray-700 dark:text-white"
        />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            togglePasswordVisibility()
          }}
          className="-ml-9 border-none bg-transparent p-2 text-gray-500 hover:text-gray-700 focus:outline-none dark:text-gray-300 dark:hover:text-white"
        >
          {isPasswordVisible ? (
            <Eye className="h-5 w-5" />
          ) : (
            <EyeOff className="h-5 w-5" />
          )}
        </button>
      </div>
      {errors?.password && (
        <p className="mb-1 ml-1 mt-[-1.25rem] text-start text-xs text-red-500">
          Password is required and must be at least 8 character
        </p>
      )}
    </>
  )
}

export default PasswordInput
