import { Link } from "react-router-dom";
import {
  HOME_PAGE,
  RECIPES_PAGE,
  NOT_FOUND_PAGE,
  RECIPE_INFO_PAGE,
} from "../../utils/consts";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header__navbar">
          <ul className="header__navbar-nav">
            <li className="header__navbar-item">
              <Link to={HOME_PAGE} className="navbar-link">
                Home
              </Link>
            </li>
            <li className="header__navbar-item">
              <Link to={RECIPES_PAGE} href="" className="navbar-link">
                Recipes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
