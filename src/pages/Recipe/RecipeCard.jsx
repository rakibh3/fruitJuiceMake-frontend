import { useEffect, useState } from 'react'
import love from '@/assets/images/love.svg'
import headphone from '@/assets/images/headphone.jpg'
import PageLoader from '@/components/PageLoader/PageLoader'
import { HiStar } from 'react-icons/hi2'

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
        <div key={recipe._id} className="card">
          <img src={headphone} alt="" className="h-full w-full object-cover" />

          <div className="flex flex-col gap-3 p-5">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <span className="badge">Stock Ready</span>
              <span className="badge">Official Store</span>
            </div>

            {/* Title */}
            <div className="product-title">
              <h3>
                {recipe.title.length > 25
                  ? recipe.title.slice(0, 25) + '...'
                  : recipe.title}
              </h3>
            </div>

            {/* Products Price */}
            <div>
              <span className="text-xl font-bold">Rs 300.00</span>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-sm font-medium opacity-50">
                  Total Calories:
                </span>
                <span className="discount-percent">80</span>
              </div>
            </div>

            {/* Product Rating */}
            <span className="mt-1 flex items-center">
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
            </span>

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
              <button className="card-icon">
                <img src={love} alt="" className="opacity-50" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
export default RecipeCard
