import { useEffect,useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "../utils/consts";
import { axiosInstance } from "../services/axios";
export function useSearchRecipes(){
    const [searchParams, setSeatchParams] = useSearchParams();
    const [recipesList, setRecipes] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    useEffect(() => {
      async function searchRecipes() {
        try {
          setLoading(true);
          const response = await axiosInstance.get(
            `/recipes/complexSearch?query=${searchParams.get(
              "query"
            )}&apiKey=${API_KEY}`
          );
          const data = response.data;
          setRecipes(data.results);
        } catch (error) {
          setError(true);
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
      searchRecipes();
    }, [searchParams]);
    return {recipesList, isLoading, isError}
}