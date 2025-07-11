import Category from '@/components/Category/Category'
import Hero from '@/components/Hero/Hero'
import Recipes from '../Recipe/Recipes'
import HowItsWork from '@/components/Shared/HowItsWork'
import ReviewSlider from '@/components/Shared/ReviewSlider'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleCategoryClick = async (categoryTitle) => {
    setSelectedCategory(categoryTitle)
  }

  return (
    <>
      <Hero />
      <Category onCategoryClick={handleCategoryClick} />

      <div>
        <h2 className="mb-4 text-center text-4xl font-bold uppercase tracking-wide dark:text-white">
          Discover Fresh Flavors
        </h2>
        <p className="container text-center text-xl font-normal tracking-wide text-slate-500 dark:text-gray-300">
          Hear from fellow juice enthusiasts about their refreshing experiences
          with Juice Haven. Your next juicy story could be here!
        </p>
        <div className="-mt-12">
          <Recipes limit={6} category={selectedCategory} />
          <div className="flex justify-center pt-12">
            <button className="rounded-md bg-primary/90 px-3 py-2 text-center font-medium text-white shadow-2xl">
              <Link to="/recipes">Explore All Recipes</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="container mt-24">
        <h2 className="mb-4 text-center text-4xl font-bold uppercase tracking-wide dark:text-white">
          What Our Juice Lovers Are Saying
        </h2>
        <p className="mb-10 text-center text-xl font-normal tracking-wide text-slate-500 dark:text-gray-300">
          Hear from fellow juice enthusiasts about their refreshing experiences
          with Juice Haven. Your next juicy story could be here!
        </p>
        <ReviewSlider />
      </div>
      <HowItsWork />
    </>
  )
}
export default Home
