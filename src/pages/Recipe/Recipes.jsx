import useRecipes from '@/hooks/useRecipes'
import RecipeCard from './RecipeCard'
import { useNavigate } from 'react-router-dom'
// import { recipeLoader } from '@/loaders/useRecipeLoader'
import { handleError } from '@/error/errorHandler'
import { useGetRecipeDetails } from '@/hooks/useGetRecipeDetails'
import { confirmAction } from '@/components/Shared/confirmAction'
import { useCoinTransfer } from '@/hooks/useCoinTransfer'
import { mutate } from 'swr'
// import useCoins from '@/hooks/useCoins'

const Recipes = () => {
  const { recipes } = useRecipes()
  const navigate = useNavigate()
  const { getRecipeDetails } = useGetRecipeDetails()
  const { transferCoins } = useCoinTransfer()
  const token = localStorage.getItem('accessToken')

  const handleViewRecipeDetails = async (recipeId) => {
    const recipeDetails = await getRecipeDetails(recipeId); 
    try {
      if (!recipeDetails?.purchased) {
       
        confirmAction({
          message: 'Not authorized. Spend 10 coins to view?',
          onConfirm: async () => {
            const purchase = await transferCoins(recipeId);
            console.log(purchase);
  
            if (purchase) {
              mutate([`${import.meta.env.VITE_API_URL}/coins`, token]); 

              navigate(`/recipe/${recipeId}`);
            } else {
              return; 
            }
          },
          onCancel: () => {
            console.log('Cancelled NO');
          },
        });
        return; // Return early if recipe not purchased
      }
  
      navigate(`/recipe/${recipeId}`); // Navigate to recipe if already purchased
    } catch (error) {
      handleError(error);
    }
  };
  

  return (
    <div className="container grid min-h-screen grid-cols-1 items-center justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
      <RecipeCard
        recipes={recipes}
        handleViewRecipeDetails={handleViewRecipeDetails}
      />
    </div>
  )
}
export default Recipes
