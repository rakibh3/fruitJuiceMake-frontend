import ImageSlider from '@/components/Shared/ImageSlider'
// import Avatar from '@/assets/avatar/avatar.jpeg'
import { IoEyeOutline } from 'react-icons/io5'
import { TbCategory } from 'react-icons/tb'
import { FaRegCircleUser } from 'react-icons/fa6'
import { useLoaderData } from 'react-router-dom'

const RecipeDetails = () => {
  const { recipe } = useLoaderData()

  return (
    <div className="container my-24">
      <ImageSlider recipeImage={recipe?.image} imageAlt={recipe?.title} />
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="my-2 grow">
          <div className="rounded-xl bg-white p-3 dark:bg-gray-800">
            {/* Recipe Creator Profile And Time */}
            {/* <div className="my-2 flex w-full flex-row gap-2 space-y-3 sm:w-auto">
              <div className="flex items-center">
                <img
                  className="mr-1 mt-[10px] h-12 w-12 rounded-full"
                  src={Avatar}
                  alt="avatar"
                />
              </div>
              <div className="flex flex-col justify-start">
                <p className="text-lg font-bold">Memento of Barca</p>
                <p className="text-xs font-medium text-slate-500">
                  18 hours ago
                </p>
              </div>
            </div> */}

            <div>
              <h1 className="my-6 text-center text-4xl font-bold capitalize dark:text-white">
                {recipe?.title}
              </h1>

              <div className="mb-4 flex flex-wrap items-center justify-center gap-8 border-y py-1 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <span className="grid size-6 place-items-center rounded bg-gray-200 dark:bg-gray-700">
                    <IoEyeOutline className="size-4 text-gray-600 dark:text-gray-300" />
                  </span>
                  <p className="flex gap-1 dark:text-white">
                    <span className="font-bold text-green-800 dark:text-green-400">
                      {recipe?.view}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="grid size-6 place-items-center rounded bg-gray-200 dark:bg-gray-700">
                    <TbCategory className="size-4 text-gray-600 dark:text-gray-300" />
                  </span>
                  <p className="flex gap-1">
                    <span className="font-medium uppercase text-slate-800 dark:text-slate-300">
                      {recipe?.category}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="grid size-6 place-items-center rounded bg-gray-200 dark:bg-gray-700">
                    <FaRegCircleUser className="size-4 text-gray-600 dark:text-gray-300" />
                  </span>
                  <p className="flex gap-1">
                    <span className="font-medium text-gray-800 dark:text-gray-300">Purchase:</span>
                    <span className="font-medium uppercase text-slate-600 dark:text-slate-400">
                      100+
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              {recipe?.description && (
                <article
                  className="prose lg:prose-xl w-full max-w-none dark:prose-invert dark:text-white"
                  dangerouslySetInnerHTML={{ __html: recipe?.description }}
                />
              )}
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
