import useRecipeList from '@/hooks/useRecipeList'
import RecipeCard from './RecipeCard'
import { useNavigate } from 'react-router-dom'
// import { recipeLoader } from '@/loaders/useRecipeLoader'
import { handleError } from '@/error/errorHandler'
import { useRecipeDetails } from '@/hooks/useRecipeDetails'
import { confirmAction } from '@/components/Shared/confirmAction'
import { mutate } from 'swr'
import useAuthentication from '@/hooks/useAuthentication'
import toast from 'react-hot-toast'
import { useCoinTransfer } from '@/hooks/useCoinTransfer'

// import useCoinBalance from '@/hooks/useCoinBalance'

const Recipes = ({ limit, category }) => {
  const { recipes } = useRecipeList(category)
  const navigate = useNavigate()
  const { getRecipeDetails } = useRecipeDetails()
  const { transferCoins } = useCoinTransfer()
  const token = localStorage.getItem('accessToken')
  const { user } = useAuthentication()

  const handleViewRecipeDetails = async (recipeId) => {
    try {
      if (!user) {
        toast.error('Please sign in to view recipe details!')
        navigate('/signin')
        return
      }

      const { purchased } = await getRecipeDetails(recipeId)

      if (!purchased) {
        confirmAction({
          message: 'Not authorized. Spend 10 coins to view?',
          onConfirm: async () => {
            const purchase = await transferCoins(recipeId)

            if (purchase) {
              mutate([`${import.meta.env.VITE_API_URL}/coins`, token])

              navigate(`/recipe/${recipeId}`)
            } else {
              return
            }
          },
          onCancel: () => {
            return
          },
        })
        return
      }

      navigate(`/recipe/${recipeId}`)
    } catch (error) {
      handleError(error)
    }
  }

  const limitedRecipes = limit ? recipes?.slice(0, limit) : recipes

  return (
    <div className="container grid grid-cols-1 items-center justify-items-center gap-8 pt-24 md:grid-cols-2 md:gap-16 lg:grid-cols-3">
      <RecipeCard
        recipes={limitedRecipes}
        handleViewRecipeDetails={handleViewRecipeDetails}
      />
    </div>
  )
}
export default Recipes
