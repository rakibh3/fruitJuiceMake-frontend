import {
  BarChart2,
  House,
  Menu,
  Settings,
  TrendingUp,
} from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SIDEBAR_ITEMS = [
  { name: 'Home', icon: House, color: '#10B981', href: '/' },
  {
    name: 'Overview',
    icon: BarChart2,
    color: '#6366f1',
    href: '/dashboard',
  },
  // {
  //   name: 'Recipes',
  //   icon: ShoppingBag,
  //   color: '#8B5CF6',
  //   href: '/dashboard/recipes',
  // },
  // { name: 'Users', icon: Users, color: '#EC4899', href: '/users' },
  // { name: 'Sales', icon: DollarSign, color: '#10B981', href: '/sales' },
  // { name: 'Orders', icon: ShoppingCart, color: '#F59E0B', href: '/orders' },
  {
    name: 'Profile',
    icon: TrendingUp,
    color: '#3B82F6',
    href: '/dashboard/profile',
  },
  {
    name: 'Settings',
    icon: Settings,
    color: '#6EE7B7',
    href: '/dashboard/settings',
  },
]

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <motion.div
      className={`relative z-10 flex-shrink-0 transition-all duration-300 ease-in-out ${
        isSidebarOpen ? 'w-64' : 'w-20'
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="flex h-full flex-col border-r border-gray-700 bg-gray-800 bg-opacity-50 p-4 backdrop-blur-md">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="max-w-fit rounded-full p-2 transition-colors hover:bg-gray-700"
        >
          <Menu size={24} />
        </motion.button>

        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="mb-2 flex items-center rounded-lg p-4 text-sm font-medium transition-colors hover:bg-gray-700">
                <item.icon
                  size={20}
                  style={{ color: item.color, minWidth: '20px' }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  )
}
export default Sidebar
