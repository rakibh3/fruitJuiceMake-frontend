import toast from 'react-hot-toast'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import avatar from '@/assets/avatar/avatar.jpeg'
import useAuth from '@/hooks/useAuth'
import Coin from '@/components/Shared/Coin'

const UserProfile = ({ user }) => {
  const dashboardOption = [
    { label: 'Dashboard', link: '/dashboard' },
    { label: 'Profile', link: '/dashboard/profile' },
    { label: 'Setting', link: '/dashboard/settings' },
  ]

  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const { logout } = useAuth()

  // Toggle dropdown handler
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  // Logout user handler
  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success('Logout Successful!', { duration: 3000 })
      })
      .catch((error) => {
        toast.error('Error logging out user:', error)
      })
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div className="flex items-center justify-center gap-2">
        <Coin />
        <button
          type="button"
          className="relative h-8 w-8 rounded-full ring-2 ring-primary ring-offset-2"
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          <img
            src={user?.photoURL || avatar}
            alt={user?.displayName}
            // title={user?.displayName}
            className="rounded-full object-fill"
          />
        </button>
      </div>

      <div
        className={`absolute right-0 z-10 mt-2 w-44 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
          isOpen ? '' : 'hidden'
        }`}
      >
        {/* User name */}
        <div className="py-1">
          <span className="block px-4 py-2 text-sm text-gray-700">
            <p className="text-base font-medium">{user?.displayName}</p>
            <p>{user?.email}</p>
          </span>
        </div>

        {/* User Profile Options */}
        <div className="py-1">
          {dashboardOption?.map((item) => (
            <Link
              key={item.label}
              to={item.link}
              className="block px-4 py-2 text-sm text-gray-700"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Logout Option */}
        <div className="py-1">
          <Link
            type="button"
            onClick={handleLogout}
            className="block px-4 py-2 text-sm text-gray-700"
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  )
}
export default UserProfile
