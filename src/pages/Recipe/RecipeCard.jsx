import { Link } from 'react-router-dom'
import love from "@/assets/images/love.svg"
import headphone from "@/assets/images/headphone.jpg"
import star from "@/assets/images/star.svg"
import halfStar from "@/assets/images/star-half-fill.svg"
import emptyStar from "@/assets/images/star-no-fill.svg"

const RecipeCard = () => {
  return (
    <div className="container grid grid-cols-1 items-center justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="card">
        <img src={headphone} alt="" className="h-full w-full object-cover" />

        <div className="flex flex-col gap-3 p-5">
          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="badge">Stock Ready</span>
            <span className="badge">Official Store</span>
          </div>

          {/* Title */}
          <div className="product-title">
            <h3>Headphone</h3>
          </div>

          {/* Products Price */}
          <div>
            <span className="text-xl font-bold">Rs 300.00</span>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-sm line-through opacity-50">Rs 500.00</span>
              <span className="discount-percent"> Save 20%</span>
            </div>
          </div>

          {/* Product Rating */}
          <span className="mt-1 flex items-center">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={halfStar} alt="" />
            <img src={emptyStar} alt="" />
            <span className="ml-2 text-xs text-gray-500">20k+ Reviews</span>
          </span>

          {/* Action Button */}
          <div className="mt-5 flex gap-4">
            <Link to="/recipe/details" className="card-btn">
              View Details
            </Link>
            <button className="card-icon">
              <img src={love} alt="" className="opacity-50" />
            </button>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="card">
        <img src={headphone} alt="" className="h-full w-full object-cover" />

        <div className="flex flex-col gap-3 p-5">
          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="badge">Stock Ready</span>
            <span className="badge">Official Store</span>
          </div>

          {/* Title */}
          <div className="product-title">
            <h3>Headphone</h3>
          </div>

          {/* Products Price */}
          <div>
            <span className="text-xl font-bold">Rs 300.00</span>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-sm line-through opacity-50">Rs 500.00</span>
              <span className="discount-percent"> Save 20%</span>
            </div>
          </div>

          {/* Product Rating */}
          <span className="mt-1 flex items-center">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={halfStar} alt="" />
            <img src={emptyStar} alt="" />
            <span className="ml-2 text-xs text-gray-500">20k+ Reviews</span>
          </span>

          {/* Action Button */}
          <div className="mt-5 flex gap-2">
            <button className="card-btn">View Details</button>
            <button className="card-icon">
              <img src={love} alt="" className="opacity-50" />
            </button>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="card">
        <img src={headphone} alt="" className="h-full w-full object-cover" />

        <div className="flex flex-col gap-3 p-5">
          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="badge">Stock Ready</span>
            <span className="badge">Official Store</span>
          </div>

          {/* Title */}
          <div className="product-title">
            <h3>Headphone</h3>
          </div>

          {/* Products Price */}
          <div>
            <span className="text-xl font-bold">Rs 300.00</span>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-sm line-through opacity-50">Rs 500.00</span>
              <span className="discount-percent"> Save 20%</span>
            </div>
          </div>

          {/* Product Rating */}
          <span className="mt-1 flex items-center">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={halfStar} alt="" />
            <img src={emptyStar} alt="" />
            <span className="ml-2 text-xs text-gray-500">20k+ Reviews</span>
          </span>

          {/* Action Button */}
          <div className="mt-5 flex gap-2">
            <button className="card-btn">View Details</button>
            <button className="card-icon">
              <img src={love} alt="" className="opacity-50" />
            </button>
          </div>
        </div>
      </div>

      {/* 4 */}
      <div className="card">
        <img src={headphone} alt="" className="h-full w-full object-cover" />

        <div className="flex flex-col gap-3 p-5">
          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="badge">Stock Ready</span>
            <span className="badge">Official Store</span>
          </div>

          {/* Title */}
          <div className="product-title">
            <h3>Headphone</h3>
          </div>

          {/* Products Price */}
          <div>
            <span className="text-xl font-bold">Rs 300.00</span>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-sm line-through opacity-50">Rs 500.00</span>
              <span className="discount-percent"> Save 20%</span>
            </div>
          </div>

          {/* Product Rating */}
          <span className="mt-1 flex items-center">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={halfStar} alt="" />
            <img src={emptyStar} alt="" />
            <span className="ml-2 text-xs text-gray-500">20k+ Reviews</span>
          </span>

          {/* Action Button */}
          <div className="mt-5 flex gap-2">
            <button className="card-btn">View Details</button>
            <button className="card-icon">
              <img src={love} alt="" className="opacity-50" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RecipeCard
