import { useEffect, useState } from "react";
import RecipieCard from "../components/RecipieCard"
import { API_KEY } from "../utils/consts";
import Loader from "../components/shared/Loader";
import Error from "../components/shared/Error";

export default function RecipiesCardPage() {
  const [recipesList, setRecipes] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    async function getRecipes() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log(data);
        setRecipes(data.results);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getRecipes();
  }, []);
  console.log(recipesList)
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
