
import RecipieCard from "../components/RecipieCard"
import Loader from "../components/shared/Loader";
import Error from "../components/shared/Error";
import { useRecipes } from "../hooks/useRecipes";


export default function RecipiesCardPage() {
  const {recipesList, isLoading, isError} = useRecipes();

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
