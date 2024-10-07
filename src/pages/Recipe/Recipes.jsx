import useRecipes from '@/hooks/useRecipes'
import RecipeCard from './RecipeCard'

const Recipes = () => {
  const { recipes } = useRecipes()
  console.log(recipes)

  return (
    <div className="xl:grid-cmt-20 container my-28 grid grid-cols-1 items-center justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
      <RecipeCard />
    </div>
  )
}
export default Recipes
