import { useSelector } from "react-redux";
import { useEffect } from "react";
import RecipeFavCard from "../components/RecipeFavCard";
export default function FavRecipesPage() {
  const favoriteRecipes = useSelector(
    (state) => state.favRecipes?.recipes || []
  );

  console.log("Redux store:", favoriteRecipes);

  useEffect(() => {
    console.log("Updated recipes from Redux store:", favoriteRecipes);
  }, [favoriteRecipes]);

  return (
    <div className="favorites__container">
      <div className="favorites__text">
        <h1 className="favorites__title">
          Your favorite recipes are stored here ;)
        </h1>
      </div>

      <div className="recipes-grid">
        {favoriteRecipes.length > 0 ? (
          favoriteRecipes.map((recipe) => (
            <RecipeFavCard
              key={recipe.id}
              name={recipe.title}
              image={recipe.image}
              id={recipe.id}
            />
          ))
        ) : (
          <h2 className="favorites__text">You don't have any favorites yet :(</h2>
        )}
      </div>
    </div>
  );
}
