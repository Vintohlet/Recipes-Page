import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../utils/consts.js";
import Loader from "../components/shared/Loader";
import RecipeInfo from "../components/RecipeInfo.jsx";
import Error from "../components/shared/Error";
import { axiosInstance } from "../services/axios.js";
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
        const response = await axiosInstance.get(`/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`);
        const data = response.data;
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
