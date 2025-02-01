import { IoIosTime } from "react-icons/io";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addRecipe } from "../redux/slices/favSlice";
export default function RecepieInfo({
  name,
  image,
  ingredients,
  instructions,
  time,
  id
}) {
  const dispatch = useDispatch();
  function handleClick() {
    alert("You successfuly added recipe to Favorites!")
    dispatch(addRecipe({id: id, title: name, image: image}))
  }
  return (
    <div className="recepie-container">
      <img src={image} alt="recepie-image" className="recepie__image" />
      <div className="recepie__text">
        <div className="recepie__title">
          <h2 className="recepie__name">{name}</h2> <IoIosTime />
          &nbsp; <p className="recepie__time"> {time}&nbsp;min</p>
        </div>

        <h3 className="recepie__ingredient-title">Needed Ingredients</h3>
        <ul className="recepie__ingredients">
          {ingredients.map((item, index) => (
            <li key={index} className="recepie__ingredient">
              {item.name}
            </li>
          ))}
        </ul>
        <h3 className="recepie__steps-title">Steps:</h3>
        <ol className="recepie__steps">
          {instructions.map((instruction, index) => (
            <li key={index} className="recepie__instruction">
              <span className="recipe__instruction-index">{index + 1}</span>.{" "}
              {instruction.step}
            </li>
          ))}
        </ol>
      </div>
      <Button variant="contained" onClick={handleClick}>
        Add to Favorite
      </Button>
    </div>
  );
}
