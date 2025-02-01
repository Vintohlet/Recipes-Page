import { Link } from "react-router-dom";
import { RECIPE_INFO_PAGE } from "../utils/consts";
import { useDispatch } from "react-redux";
import { removeRecipe } from "../redux/slices/favSlice";

export default function RecipeFavCard({name, image, id}){   
    const dispatch = useDispatch();
    function handleDelete(){
        alert("Recipe was successfuly removed!")
        dispatch(removeRecipe(id));
    }
    return(
        <div className="card" style={{ width: "18rem",  height: "400px"}}>
          <img
            src={image}
            className="card-img-top"
            alt={name}
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>            
           <div className="card__buttons">
           <Link to={RECIPE_INFO_PAGE.replace(":id", id)} className="btn ">
              How to Cook
            </Link>
            <div className="btn btn-danger" onClick={handleDelete}>Remove</div>
           </div>
          </div>
        </div>
    )
}