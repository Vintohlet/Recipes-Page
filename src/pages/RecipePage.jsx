
import Loader from "../components/shared/Loader";
import RecipeInfo from "../components/RecipeInfo.jsx";
import Error from "../components/shared/Error";
import { useRecipeInfo } from "../hooks/useRecipeInfo.js";
export default function RecipePage() {
  const {recipeInfo, isLoading, isError} = useRecipeInfo();
  return isLoading ? (
    <Loader />
  ) : isError ? (
    <Error />
  ) : recipeInfo ? (
    <RecipeInfo
      name={recipeInfo.title}
      image={recipeInfo.image}
      ingredients={recipeInfo.extendedIngredients}
      instructions={recipeInfo.analyzedInstructions[0].steps ? recipeInfo.analyzedInstructions[0].steps : []} 
      time={recipeInfo.readyInMinutes}
      key={recipeInfo.id}
      id = {recipeInfo.id}
    />
  ) : (
    null
  );
}
