import ImageSlider from '@/components/Shared/ImageSlider'
import Avatar from '@/assets/avatar/avatar.jpeg'
import { IoEyeOutline } from 'react-icons/io5'
import { TbCategory } from 'react-icons/tb'
import { FaRegCircleUser } from 'react-icons/fa6'

const recipeData = {
  photos:
    'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png',
  createdBy: {
    profile: {
      profilePhoto: 'https://via.placeholder.com/150',
      name: 'John Doe',
      bio: 'Passionate traveler who loves exploring new places.',
    },
    username: 'john_doe',
    _count: {
      trip: 5,
    },
  },
  createdAt: new Date(),
  location: 'Paris, France',
  tripType: 'Adventure',
  itinerary: 'Day 1: Arrival in Paris, Day 2: Eiffel Tower visit, etc.',
  description: 'This was a wonderful trip exploring the beauty of Paris.',
}

const RecipeDetails = () => {
  return (
    <div className="container my-24">
      <ImageSlider recipeImage={recipeData?.photos || []} />
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="my-2 grow">
          <div className="rounded-xl bg-white p-3">
            {/* Recipe Creator Profile And Time */}
            <div className="my-2 flex w-full flex-row gap-2 space-y-3 sm:w-auto">
              <div className="flex items-center">
                <img
                  className="mr-1 mt-[10px] h-12 w-12 rounded-full"
                  src={Avatar}
                  alt="Memento of Barca"
                />
              </div>
              <div className="flex flex-col justify-start">
                <p className="text-lg font-bold">Memento of Barca</p>
                <p className="text-xs font-medium text-slate-500">
                  18 hours ago
                </p>
              </div>
            </div>

            <div>
              <h1 className="my-6 text-center text-2xl font-semibold uppercase">
                Recipe title
              </h1>

              <div className="mb-4 flex flex-wrap items-center justify-center gap-8 border-y py-1">
                <div className="flex items-center gap-2">
                  <span className="grid size-6 place-items-center rounded bg-gray-200">
                    <IoEyeOutline className="size-4 text-gray-600" />
                  </span>
                  <p className="flex gap-1">
                    <span className="font-bold text-green-800">100</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="grid size-6 place-items-center rounded bg-gray-200">
                    <TbCategory className="size-4 text-gray-600" />
                  </span>
                  <p className="flex gap-1">
                    <span className="font-medium uppercase text-slate-800">
                      Apple
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="grid size-6 place-items-center rounded bg-gray-200">
                    <FaRegCircleUser className="size-4 text-gray-600" />
                  </span>
                  <p className="flex gap-1">
                    <span className="font-medium text-gray-800">Purchase:</span>
                    <span className="font-medium uppercase text-slate-600">
                      100+
                    </span>
                  </p>
                </div>
              </div>

              <p className="mt-1 text-sm leading-normal text-slate-700">
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged.
              </p>
            </div>
          </div>

          {/* TODO: Recipe Review */}
          {/* <TripReviews trip={tripData} currentUser={user} /> */}
        </div>
      </div>
    </div>
  )
}
export default RecipeDetails
