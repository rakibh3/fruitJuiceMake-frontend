import { Menu, Sun, Moon } from 'lucide-react'
import { LeafyGreen } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ResponsiveMenu from '@/components/Shared/ResponsiveMenu'
import useMenuItemsList from '@/hooks/useMenuItemsList'
import AuthAction from '@/components/AuthAction/AuthAction'
import UserProfile from '@/components/UserProfile/UserProfile'
import useAuthentication from '@/hooks/useAuthentication'
import useTheme from '@/hooks/useTheme'

const Navbar = () => {
  const { user } = useAuthentication()
  const NavbarMenu = useMenuItemsList()
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center border-b bg-white backdrop-blur-sm md:h-14 dark:bg-gray-800 dark:border-gray-700">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="container flex items-center justify-between py-4 md:pt-4"
        >
          <div className="flex items-center justify-center gap-2">
            {/* Mobile HamburgeMenu Section */}
            <div className="md:hidden" onClick={() => setOpen(!open)}>
              <Menu className="text-4xl" />
            </div>
            {/* Logo Section */}
            <Link to="/">
              <div className="flex items-center gap-2 text-2xl font-medium uppercase">
                {/* <p className="text-primary">Fruit</p> */}

                <p className="text-secondary">Juicers</p>

                <LeafyGreen className="text-green-500" />
              </div>
            </Link>
          </div>

          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600 dark:text-gray-300">
              {NavbarMenu.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="#ef4444 inline-block hover:text-primary hover:shadow-[0_3px_0_-1px]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="focus:outline-none">
              {theme === 'light' ? (
                <Moon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              ) : (
                <Sun className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              )}
            </button>
            {user?.email ? <UserProfile user={user} /> : <AuthAction />}
          </div>
        </motion.div>
        <ResponsiveMenu open={open} />
      </nav>
    </>
  )
}
export default Navbar

