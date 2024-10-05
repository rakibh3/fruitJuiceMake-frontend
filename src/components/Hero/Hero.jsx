import { BadgePlus } from 'lucide-react'
import { Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import HeroPng from '@/assets/fruit-plate.png'
import LeafPng from '@/assets/leaf.png'
import { FadeRight } from '@/utils/animatio'

const Hero = () => {
  return (
    <section>
      <div className="container relative grid min-h-[650px] grid-cols-1 md:grid-cols-2">
        {/* Brand Info */}
        <div className="relative z-10 flex flex-col justify-center py-14 md:py-0">
          <div className="space-y-6 text-center md:text-left lg:max-w-[400px]">
            <motion.h1
              variants={FadeRight(0.4)}
              initial="hidden"
              animate="visible"
              className="font-averia text-5xl font-bold leading-relaxed lg:text-6xl xl:leading-loose"
            >
              Healthy
              <br />
              Fresh <span className="text-secondary">Fruits!</span>
            </motion.h1>
            <motion.p
              variants={FadeRight(0.8)}
              initial="hidden"
              animate="visible"
              className="text-2xl tracking-wide"
            >
              Order Now For Fresh Healthy Life
            </motion.p>
            <motion.p
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-gray-400"
            >
              Healthy and yummy food for fresh morning breakfast. Eat Daily for
              good health and mind Order now and get 20% off on your first order
            </motion.p>
            {/* Button */}
            <motion.div
              variants={FadeRight(0.4)}
              initial="hidden"
              animate="visible"
              className="flex justify-center gap-10 md:justify-start"
            >
              <button className="primary-btn up flex items-center gap-2">
                <span>
                  <Eye></Eye>
                </span>
                See Recipes
              </button>
              <button className="primary-btn flex items-center gap-2">
                <span>
                  <BadgePlus />
                </span>
                Add Recipe
              </button>
            </motion.div>
          </div>
        </div>
        {/* Hero Images */}
        <div className="flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            src={HeroPng}
            alt="Fruits Plate"
            className="w-[350px] drop-shadow md:w-[550px]"
          />
        </div>
        {/* Leaf Image */}
        <div className="opcaity-80 absolute right-1/2 top-14 rotate-[40deg] blur-sm md:top-0">
          <motion.img
            initial={{ opacity: 0, y: -200, rotate: 75 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            src={LeafPng}
            alt="Leaf Image"
            className="w-full md:max-w-[300px]"
          />
        </div>
      </div>
    </section>
  )
}
export default Hero
