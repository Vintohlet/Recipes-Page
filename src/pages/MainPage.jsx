import { Link } from "react-router-dom"
export default function MainPage(){
    return(
        <div className="main__page">
        <div className="main__content">
          <h1 className="main__title">
            Many recipes from different cuisines of the world!
          </h1>
          <button className="main__button">
            <Link to="/recipes" className="main__button-link">
              Check
            </Link>
          </button>
        </div>
      </div>
    )
}