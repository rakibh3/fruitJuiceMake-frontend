import { HiOutlineUserPlus, HiOutlineLockClosed } from 'react-icons/hi2'
import { PiBook, PiBackpack } from 'react-icons/pi'

const howItWorksData = [
  {
    title: 'Create an Account',
    subtitle:
      'Sign up with your email and create your account and join our community of food enthusiasts.',
    icon: HiOutlineUserPlus,
  },
  {
    title: 'Add Your Own Recipe',
    subtitle:
      'Share your culinary creations by submitting your own recipes, including images',

    icon: PiBackpack,
  },
  {
    title: 'Browse Recipes',
    subtitle:
      'Explore a wide variety of delicious recipes shared by other users and get inspired for your next meal.',
    icon: PiBook,
  },
  {
    title: 'Unlock Recipe Details',
    subtitle:
      'Spend coins to unlock recipe details and connect with the creators for a deeper culinary experience.',
    icon: HiOutlineLockClosed,
  },
]

const HowItsWork = () => {
  return (
    // <div className="container mt-24">
    //     <h2 className="mb-4 text-center text-4xl font-bold uppercase tracking-wider">
    //       What Our Juice Lovers Are Saying
    //     </h2>
    //     <p className="mb-10 text-center text-xl font-normal tracking-wider text-slate-500">
    //       Hear from fellow juice enthusiasts about their refreshing experiences
    //       with Juice Haven. Your next juicy story could be here!
    //     </p>
    //     <ReviewSlider />
    //   </div>

    <section className="container mt-24 space-y-8">
      <div>
        <h2 className="mb-4 text-center text-4xl font-bold uppercase tracking-wider dark:text-white">
          How It Works
        </h2>
        <p className="mb-2 text-center text-xl font-normal tracking-wider text-slate-500 dark:text-gray-300">
          Discover how our Recipe Sharing system connects food lovers, making it
          easy and fun to explore, share, and enjoy culinary creations together!
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {howItWorksData?.map((howItWork, i) => (
          <div
            className="group relative isolate flex flex-col items-center justify-center overflow-hidden rounded-lg bg-white px-6 py-10 text-center dark:bg-gray-800"
            key={howItWork.title + i}
          >
            <span className="absolute -bottom-5 -right-3 -z-10 select-none text-8xl font-bold text-gray-300/70 transition group-hover:text-gray-300 dark:text-gray-700">
              {`0${i + 1}`}
            </span>
            <span className="mb-6 text-5xl text-primary">
              <howItWork.icon />
            </span>
            <h3 className="mb-4 text-xl font-semibold text-slate-800 dark:text-white">
              {howItWork.title}
            </h3>
            <p className="text-sm leading-normal text-slate-500 dark:text-gray-400">
              {howItWork.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default HowItsWork
