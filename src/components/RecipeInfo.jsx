import { IoIosTime } from "react-icons/io";
export default function RecepieInfo({
  name,
  image,
  ingredients,
  instructions,
  time
}) {
  return (
    <div className="recepie-container">
      <img src={image} alt="recepie-image" className="recepie__image" />
      <div className="recepie__text">
        <div className="recepie__title"><h2 className="recepie__name">{name}</h2> <IoIosTime/>&nbsp; <p className="recepie__time"> {time}&nbsp;min</p></div>
        
        <h3 className="recepie__ingredient-title">Needed Ingredients</h3>
        <ul className="recepie__ingredients">
          {ingredients.map((item) => (
            <li className="recepie__ingredient">{item.name}</li>
          ))}
        </ul>
        <h3 className="recepie__steps-title">Steps:</h3>
        <ol className="recepie__steps">
          {instructions.map((instruction, index) => (
            <li className="recepie__instruction"><span className="recipe__instruction-index">{index+1}</span>. {instruction.step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
