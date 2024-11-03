import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { format } from 'date-fns'
import { CgQuote } from 'react-icons/cg'
import { HiStar } from 'react-icons/hi2'
import avatar from '@/assets/avatar/avatar.jpeg'

const reviews = [
  {
    id: '1',
    content:
      'This juice is incredibly refreshing! Perfect for a hot day. I love how natural it tastes, and the combination of fruits is just right. Not overly sweet, just the perfect balance. Will definitely be ordering more!',
    rating: 5,
    createdAt: new Date(),
    user: {
      profile: {
        name: 'John Doe',
        profilePhoto:
          'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
  },
  {
    id: '2',
    content:
      'The flavors are amazing, but I wish it was a bit less sweet. I enjoyed the initial taste, but for my preference, a little less sugar would make it perfect. Still, it’s a great treat, especially for those with a sweet tooth.',
    rating: 4,
    createdAt: new Date(),
    user: {
      profile: {
        name: 'Jane Smith',
        profilePhoto: '',
      },
    },
  },
  {
    id: '3',
    content:
      'Best juice I’ve ever had! Fresh, full of flavor, and the quality is outstanding. I love that it doesn’t have any artificial aftertaste. The pineapple and mango blend is just fantastic. A must-try for juice lovers!',
    rating: 5,
    createdAt: new Date(),
    user: {
      profile: {
        name: 'Emily Clark',
        profilePhoto:
          'https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
  },
  {
    id: '4',
    content:
      'Nice flavor, but I found it too tangy for my taste. It’s a good juice overall, just not what I expected. I would recommend it for people who enjoy a strong citrus kick. For me, a little too strong, but I can see others loving it.',
    rating: 3,
    createdAt: new Date(),
    user: {
      profile: {
        name: 'Mike Johnson',
        profilePhoto:
          'https://plus.unsplash.com/premium_photo-1689629870780-5d0e655383e6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
  },
  {
    id: '5',
    content:
      'Absolutely loved it! The perfect blend of fruits, and the freshness is top-notch. It feels like drinking straight from the orchard. I especially loved the mix of tropical fruits; they transport you to a beach with every sip!',
    rating: 5,
    createdAt: new Date(),
    user: {
      profile: {
        name: 'Sarah Lee',
        profilePhoto:
          'https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
  },
  {
    id: '6',
    content:
      'Decent juice, but it could use more natural sweetness. I found it a bit bland compared to others I’ve tried. It’s still refreshing, though, and good for those who don’t like overly sweet drinks. A solid option overall.',
    rating: 4,
    createdAt: new Date(),
    user: {
      profile: {
        name: 'Chris Evans',
        profilePhoto:
          'https://images.unsplash.com/photo-1602471615287-d733c59b79c4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    },
  },
  //   {
  //     id: '7',
  //     content:
  //       'My go-to juice now! Love the freshness and taste, and I can tell it’s made with quality ingredients. It has become a regular in my grocery list. Perfect for a quick, healthy refreshment. Highly recommended!',
  //     rating: 5,
  //     createdAt: new Date(),
  //     user: {
  //       profile: {
  //         name: 'Laura Perez',
  //         profilePhoto: 'https://source.unsplash.com/random/200x200?person,7', // Unsplash image
  //       },
  //     },
  //   },
  //   {
  //     id: '8',
  //     content:
  //       'Good juice, but I prefer it with less pulp. The flavor is great, and it’s very refreshing, but I’m not a big fan of pulp. Maybe an option for pulp-free would be nice. But it’s an excellent drink!',
  //     rating: 4,
  //     createdAt: new Date(),
  //     user: {
  //       profile: {
  //         name: 'Tom Harris',
  //         profilePhoto: 'https://source.unsplash.com/random/200x200?person,8', // Unsplash image
  //       },
  //     },
  //   },
  //   {
  //     id: '9',
  //     content:
  //       'A bit pricey, but the quality is worth it! You can taste the freshness in each sip, and the packaging is also top-quality. It’s definitely a treat, but I don’t mind spending a little more for something this good.',
  //     rating: 4,
  //     createdAt: new Date(),
  //     user: {
  //       profile: {
  //         name: 'Jessica Brown',
  //         profilePhoto: 'https://source.unsplash.com/random/200x200?person,9', // Unsplash image
  //       },
  //     },
  //   },
  //   {
  //     id: '10',
  //     content:
  //       'Refreshing and delicious! I was surprised by how vibrant the flavors are. You can tell a lot of care goes into the making of this juice. Will definitely buy again and try some other flavors. Fantastic for a mid-day boost!',
  //     rating: 5,
  //     createdAt: new Date(),
  //     user: {
  //       profile: {
  //         name: 'David Wilson',
  //         profilePhoto: 'https://source.unsplash.com/random/200x200?person,10', // Unsplash image
  //       },
  //     },
  //   },
]

const ReviewSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      grabCursor={true}
      spaceBetween={16}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      centeredSlides
      loop={true}
      className="relative items-center"
      modules={[Autoplay]}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          {({ isActive }) => (
            <div
              className={`relative space-y-5 rounded-xl border border-gray-300 px-12 py-6 text-center transition ${
                isActive ? 'bg-white' : 'bg-gray-100'
              }`}
            >
              <CgQuote
                className={`absolute -bottom-10 right-0 size-32 ${
                  isActive ? 'text-primary/40' : 'text-gray-300'
                }`}
              />
              <CgQuote
                className={`absolute -top-10 left-0 size-32 ${
                  isActive ? 'text-primary/40' : 'text-gray-300'
                }`}
              />
              <div className="grid place-items-center">
                <img
                  src={review.user.profile.profilePhoto || avatar}
                  height={160}
                  width={160}
                  className="size-16 rounded-md object-cover"
                  alt="User photo"
                />
              </div>
              <div className="flex items-center justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <HiStar
                    key={`${review.id}-${i}`}
                    className={`size-6 ${
                      review.rating > i ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                {review?.content.length > 190
                  ? review.content.slice(0, 190) + '...'
                  : review.content}
              </p>
              <div className="mx-auto h-px w-20 bg-gray-300"></div>
              <div className="space-y-0.5 text-center">
                <h3 className="font-semibold text-gray-800">
                  {review.user.profile.name}
                </h3>
                <p className="text-center text-xs text-gray-500">
                  {format(new Date(review.createdAt), 'd MMM, yyyy')}
                </p>
              </div>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default ReviewSlider
