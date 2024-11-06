import { BarChart2, ShoppingBag, Coins, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import Header from '@/components/Dashboard/Shared/Header'
import Stats from '@/components/Dashboard/Shared/Stats'
import SalesOverviewChart from '@/components/Dashboard/Overview/SalesOverviewChart'
import CategoryChart from '@/components/Dashboard/Overview/CategoryChart'
import useRecipesHistory from '@/hooks/useRecipesHistory'

const Overview = () => {
  const { data } = useRecipesHistory()

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
            name="Sold Recipes"
            icon={Zap}
            value={data?.soldRecipes.length}
            color="#6366F1"
          />
          <Stats
            name="Coins Earned"
            icon={Coins}
            value={data?.coinEarned}
            color="#8B5CF6"
          />
          <Stats
            name="Total Recipes"
            icon={ShoppingBag}
            value={data?.recipeCreatedByUser.length}
            color="#EC4899"
          />
          <Stats
            name="Visitors Count"
            icon={BarChart2}
            value={data?.viewCount}
            color="#10B981"
          />
        </motion.div>

        {/* CHARTS */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <SalesOverviewChart />
          <CategoryChart data={data} />
        </div>
      </main>
    </div>
  )
}
export default Overview
