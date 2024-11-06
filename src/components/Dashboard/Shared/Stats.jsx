import { motion } from 'framer-motion'

const Stats = ({ name, icon: Icon, value, color }) => {
  return (
    <motion.div
      className="overflow-hidden rounded-xl border border-gray-700 bg-gray-800 bg-opacity-50 shadow-lg backdrop-blur-md"
      whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm font-medium text-gray-400">
          <Icon size={20} className="mr-2" style={{ color }} />
          {name}
        </span>
        <p className="mt-1 text-3xl font-semibold text-gray-100">{value}</p>
      </div>
    </motion.div>
  )
}
export default Stats
