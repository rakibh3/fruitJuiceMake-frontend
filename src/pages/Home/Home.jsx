import Category from '@/components/Category/Category'
import Hero from '@/components/Hero/Hero'
import Recipes from '../Recipe/Recipes'
import HowItsWork from '@/components/Shared/HowItsWork'
import ReviewSlider from '@/components/Shared/ReviewSlider'

const Home = () => {
  return (
    <>
      <Hero />
      <Category />

      <>
        <h1 className="container text-left text-2xl font-bold uppercase">
          Latest Recipes
        </h1>
        <div className="mb -mt-14">
          <Recipes limit={6} />
        </div>
      </>
      <div className="container mt-16">
        <h2 className="mb-4 text-center text-2xl font-bold uppercase tracking-wider">
          What Our Juice Lovers Are Saying
        </h2>
        <p className="text-md mb-10 text-center font-normal tracking-wider text-slate-500">
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
