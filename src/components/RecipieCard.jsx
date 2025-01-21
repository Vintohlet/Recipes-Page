import { Link } from "react-router-dom";
import { RECIPE_INFO_PAGE } from "../utils/consts";

export default function RecipieCard({name, image, id}){
  console.log(RECIPE_INFO_PAGE.replace(":id", id),"recep")
    return(
        <div className="card" style={{ width: "18rem",  height: "400px"}}>
          <img
            src={image}
            className="card-img-top"
            alt={name}
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>            
            <Link to={RECIPE_INFO_PAGE.replace(":id", id)} className="btn ">
              How to Cook
            </Link>
          </div>
        </div>
    )
}