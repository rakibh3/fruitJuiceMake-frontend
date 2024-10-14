import Category from '@/components/Category/Category'
import Hero from '@/components/Hero/Hero'
import Recipes from '../Recipe/Recipes'

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
    </>
  )
}
export default Home
