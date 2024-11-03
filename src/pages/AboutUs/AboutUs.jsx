import HowItsWork from '@/components/Shared/HowItsWork'
import { Link } from 'react-router-dom'
import aboutImg from '@/assets/about/about-us.png'

const AboutUs = () => {
  return (
    <section className="container">
      <div className="mt-24 text-center">
        <h2 className="mb-4 text-center text-4xl font-bold uppercase tracking-wider">
          About Us
        </h2>
        <p className="mb-2 text-center text-xl font-normal tracking-wider text-slate-500 md:px-16">
          <span className="font-medium text-primary/90">Juicers</span> is all
          about bringing fresh flavors and vibrant experiences to juice lovers
          everywhere. Discover unique juice blends, share your favorite recipes,
          and explore flavor inspirations from around the world. Join our
          community and let every sip take you on a delicious journey!
        </p>
        <div className="mx-auto mt-10 flex flex-col justify-center gap-10 lg:flex-row">
          <div className="flex aspect-[4/3] items-center justify-center rounded-xl mix-blend-multiply sm:aspect-[2/1] lg:aspect-square lg:w-96">
            <img
              src={aboutImg}
              alt="Mix of fruits"
              className="rounded-md object-cover"
            />
          </div>
          <div className="relative mx-auto flex flex-col items-start justify-center space-y-4 sm:-mt-40 sm:w-[75%] sm:rounded-lg sm:bg-white sm:px-6 sm:py-5 lg:m-0 lg:mt-0 lg:w-3/5 lg:bg-transparent lg:p-0">
            <h3 className="mb-2 text-xl font-bold capitalize md:text-2xl">
              Sip and Share with Fellow Juice Lovers
            </h3>
            <p className="text-left text-lg font-normal text-slate-500">
              Welcome to Juicers, your ultimate destination for discovering
              fresh flavors and connecting with juice enthusiasts around the
              world!
            </p>
            <p className="text-left text-lg font-normal text-slate-500">
              Our mission is simple: to inspire a community that celebrates
              fresh ingredients, creative recipes, and a passion for wellness.
              At Juice Haven, each recipe is a journey, and every sip is an
              invitation to discover something new. <br /> <br />
              Join us on this flavorful adventure! With Juice Haven, you&apos;re
              not just enjoying a drink; you&apos;re becoming part of a vibrant
              community dedicated to taste, health, and the joy of sharing.
            </p>

            <button className="rounded-md bg-primary/90 px-3 py-2 font-medium text-white">
              <Link to="/recipes">Explore Recipe</Link>
            </button>
          </div>
        </div>
      </div>
      <HowItsWork />
    </section>
  )
}
export default AboutUs
