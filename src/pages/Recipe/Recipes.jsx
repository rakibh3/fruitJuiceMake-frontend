import useRecipes from '@/hooks/useRecipes'
import RecipeCard from './RecipeCard'

const Recipes = () => {
  const { recipes } = useRecipes()

  return (
    <div className="container grid min-h-screen grid-cols-1 items-center justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
      <RecipeCard recipes={recipes} />
    </div>
  )
}
export default Recipes
