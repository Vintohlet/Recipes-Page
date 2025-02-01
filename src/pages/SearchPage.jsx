
import Loader from "../components/shared/Loader";
import Error from "../components/shared/Error";
import RecipieCard from "../components/RecipieCard";
import SearchError from "../components/shared/SearchError";
import { useSearchRecipes } from "../hooks/useSearchRecipes";
export default function SearchPage() {
  const {recipesList, isLoading, isError} = useSearchRecipes();
  return isLoading ? (
    <Loader />
  ) : isError ? (
    <Error />
  ) : (recipesList.length === 0) ? (
    <SearchError />
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
