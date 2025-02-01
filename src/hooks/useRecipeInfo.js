import { useEffect,useState } from "react";
import { axiosInstance } from "../services/axios";
import { API_KEY } from "../utils/consts";
import { useParams } from "react-router-dom";
export function useRecipeInfo(){
    const { id } = useParams();
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
          console.log(data)
        } catch (error) {
          setError(true);
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      getRecipeInfo();
    }, [id]);
    return {recipeInfo, isLoading, isError}
}