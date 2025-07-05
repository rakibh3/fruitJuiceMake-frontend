import { useEffect, useState } from 'react'
import love from '@/assets/images/love.svg'
import PageLoader from '@/components/PageLoader/PageLoader'
import toast from 'react-hot-toast'
// import { HiStar } from 'react-icons/hi2'
import { IoEyeOutline, IoShareSocialOutline } from 'react-icons/io5'

const RecipeCard = ({ recipes, handleViewRecipeDetails }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (recipes && recipes.length > 0) {
      setLoading(false)
    }
  }, [recipes])

  if (loading) return <PageLoader />

  return (
    <>
      {recipes?.map((recipe) => (
        <div key={recipe._id} className="card dark:bg-gray-700 dark:text-white">
          <img
            src={recipe.image}
            alt=""
            className="h-full w-full object-cover"
          />

          <div className="flex flex-col gap-3 p-5">
            {/* Badge */}
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-r-full bg-gray-200 px-3 py-1 text-xs dark:bg-gray-600 dark:text-gray-300">
                {recipe?.category}
              </span>
              <span className="flex items-center gap-1 rounded-l-full bg-gray-200 px-3 py-1 text-xs dark:bg-gray-600 dark:text-gray-300">
                <IoEyeOutline className="size-4" /> {recipe.view} Views
              </span>
            </div>
            {/* Title */}
            <div className="product-title">
              <h3>
                {recipe?.title?.length > 25
                  ? recipe?.title?.slice(0, 25) + '...'
                  : recipe?.title}
              </h3>
            </div>
            {/* Recipe Details */}
            <div>
              <p className="mb-3 text-left text-sm text-gray-600 dark:text-gray-400">
                {recipe?.recipeSummary?.length > 90
                  ? recipe?.recipeSummary?.slice(0, 90) + '...'
                  : recipe?.recipeSummary}
              </p>
              <div className="mt-1 inline-flex items-center gap-4">
                <p className="inline-flex gap-1 text-sm font-medium">
                  <span>Calories:</span>
                  <span className="rounded-md bg-secondary/90 px-2 py-0.5 text-xs font-semibold text-white">
                    {recipe.calories}
                  </span>
                </p>

                <p className="inline-flex gap-1 text-sm font-medium">
                  <span>Prep Time: </span>
                  <span className="rounded-md bg-secondary/90 px-2 py-0.5 text-xs font-semibold text-white">
                    {recipe.preparationTime} Min
                  </span>
                </p>
              </div>
            </div>

            {/* Rating */}
            {/* <span className="mt-1 flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <HiStar
                  key={i}
                  // key={`${review.id}-${i}`}
                  className={`size-6 ${
                    // review.rating > i ? 'text-yellow-400' : 'text-gray-300'
                    4 > i ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
              {/* <span className="ml-2 text-xs text-gray-500">20k+ Reviews</span> */}
            {/* </span> */}

            {/* Action Button */}
            <div className="mt-5 flex gap-4">
              <button
                type="button"
                // to={`/recipe/${recipe._id}`}
                className="card-btn"
                onClick={() => handleViewRecipeDetails(recipe._id)}
              >
                View Details
              </button>

              {/* Implement Fav */}
              <button className="card-icon dark:bg-gray-600/95">
                <img src={love} alt="" className="dark:invert" />
              </button>
              {/* Implement Share */}
              <button
                className="card-icon dark:bg-gray-600/95"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${window.location.origin}/recipe/${recipe._id}`
                  )
                  toast.success('Recipe URL copied to clipboard!')
                }}
              >
                <IoShareSocialOutline className="size-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
export default RecipeCard
