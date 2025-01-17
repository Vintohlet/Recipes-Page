import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../utils/consts.js";
import Loader from "../components/shared/Loader";
import RecipeInfo from "../components/RecipeInfo.jsx";
import Error from "../components/shared/Error";
export default function RecipePage() {
  const { id } = useParams();
  console.log(id)
  const [recipeInfo, setRecipeInfo] = useState();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  useEffect(() => {
    async function getRecipeInfo() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setRecipeInfo(data);
        console.log(data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getRecipeInfo();
  }, [id]);
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
    />
  ) : (
    null
  );
}
