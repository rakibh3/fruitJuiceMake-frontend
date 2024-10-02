import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ImageSlider = ({ tripImgs }) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      position: 'absolute',
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'absolute',
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      position: 'absolute',
    }),
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setActiveImgIndex(
      (prevIndex) =>
        (prevIndex + newDirection + tripImgs.length) % tripImgs.length,
    )
  }

  return (
    <div className="flex flex-col gap-2 rounded-xl bg-white p-2 md:h-[500px] md:flex-row-reverse">
      <div className="relative aspect-video grow overflow-hidden md:aspect-auto">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={tripImgs[activeImgIndex]}
            src={tripImgs[activeImgIndex]}
            alt={tripImgs[activeImgIndex]}
            className="h-full w-full rounded-lg object-cover"
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 1 },
              ease: 'easeInOut',
            }}
          />
        </AnimatePresence>
      </div>

      <div className="flex flex-row gap-2 md:w-[150px] md:shrink-0 md:flex-col lg:w-[180px]">
        {tripImgs.map((tripImg, i) => (
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            key={i}
            onClick={() => {
              paginate(i > activeImgIndex ? 1 : -1)
              setActiveImgIndex(i)
            }}
            className={`relative aspect-[4/3] flex-1 overflow-hidden rounded-lg md:w-full ${
              activeImgIndex !== i && 'cursor-pointer'
            }`}
          >
            <img
              src={tripImg}
              alt={'Trip Photo'}
              className="h-full w-full object-cover"
            />
            <span
              className={`absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-gray-100/40 transition ${
                activeImgIndex !== i &&
                'rounded-lg border-2 border-gray-400 bg-transparent'
              }`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
