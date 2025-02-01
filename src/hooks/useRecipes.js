import { useEffect,useState } from "react";
import { axiosInstance } from "../services/axios";
import { API_KEY } from "../utils/consts";
export function useRecipes(){
     const [recipesList, setRecipes] = useState([]);
      const [isLoading, setLoading] = useState(false);
      const [isError, setError] = useState(false);
    
      useEffect(() => {
        async function getRecipes() {
          try {
            setLoading(true);
            const response = await axiosInstance.get(`/recipes/random?number=12&apiKey=${API_KEY}`);
            const data = response.data;
          
            setRecipes(data.recipes);
          } catch (error) {
            setError(true);
            console.error(error);
          } finally {
            setLoading(false);
          }
        }
        getRecipes();
      }, []);
    return {recipesList,isLoading,isError}
}