import { Link } from "react-router-dom";
import {
  HOME_PAGE,
  RECIPES_PAGE,
  NOT_FOUND_PAGE,
  RECIPE_INFO_PAGE,
  SEARCH_PAGE,
} from "../utils/consts";
import { useState } from "react";
import classNames from "classnames";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../providers/ThemeProvider.jsx";
import { FiSearch } from "react-icons/fi";

export default function Header() {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);
  const [ searchInput, setSearchInput ] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    if(searchInput){
      navigate(SEARCH_PAGE+"?query="+ searchInput)
      setSearchInput("")
    }
  }

  return (
    <header>
      <div className="container">
        <div className="header__navbar">
          <ul className="header__navbar-nav">
            <div className="theme">
              <p className="theme-text">Light</p>
              <div
                className={classNames("toggle", {
                  toggle__active: isLightTheme,
                })}
                onClick={toggleTheme}
              >
                <span className="toggle-round"></span>
              </div>
              <p className="theme-text">Dark</p>
            </div>
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
            <form onSubmit={handleSubmit} className="search">
              <input
                type="text"
                className="search-input"
                placeholder="Find Recipe"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <FiSearch className="search-icon" />
            </form>
          </ul>
        </div>
      </div>
    </header>
  );
}
