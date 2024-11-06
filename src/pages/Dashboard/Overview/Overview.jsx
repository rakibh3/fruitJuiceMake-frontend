import { BarChart2, ShoppingBag, Users, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import Header from '@/components/Dashboard/Shared/Header'
import Stats from '@/components/Dashboard/Shared/Stats'
import SalesOverviewChart from '@/components/Dashboard/Overview/SalesOverviewChart'
import CategoryChart from '@/components/Dashboard/Overview/CategoryChart'

const Overview = () => {
  return (
    <div className="relative z-10 flex-1 overflow-auto">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        {/* STATS */}
        <motion.div
          className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Stats
            name="Total Sales"
            icon={Zap}
            value="$12,345"
            color="#6366F1"
          />
          <Stats name="New Users" icon={Users} value="1,234" color="#8B5CF6" />
          <Stats
            name="Total Products"
            icon={ShoppingBag}
            value="567"
            color="#EC4899"
          />
          <Stats
            name="Conversion Rate"
            icon={BarChart2}
            value="12.5%"
            color="#10B981"
          />
        </motion.div>

        {/* CHARTS */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <SalesOverviewChart />
          <CategoryChart />
        </div>
      </main>
    </div>
  )
}
export default Overview
