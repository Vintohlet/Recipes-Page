import { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom"
import Loader from "../components/shared/Loader";
import Error from "../components/shared/Error";
import { axiosInstance } from "../services/axios";
import { API_KEY } from "../utils/consts";
import RecipieCard from "../components/RecipieCard";
export default function SearchPage(){
    const [searchParams, setSeatchParams]= useSearchParams();
    console.log(searchParams.get("query"))
    const [recipesList, setRecipes] = useState([]);
     const [isLoading, setLoading] = useState(false);
      const [isError, setError] = useState(false);

    
     useEffect(() => {
       async function searchRecipes() {
         try {
           setLoading(true);
           const response = await axiosInstance.get(`/recipes/complexSearch?query=${searchParams.get("query")}&apiKey=${API_KEY}`);
           const data = response.data;
           console.log(data.results);
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
    return isLoading ? (
        <Loader />
      ) : isError ? (
        <Error />
      ) : (
        <div className="recipes-grid">
          {recipesList &&
            recipesList.map((item) => (
              <RecipieCard
                key={item.id}
                name={item.title}
                image={item.image}
                id={item.id}
              />
            ))}
        </div>
      );
    }