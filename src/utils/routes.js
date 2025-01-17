import MainPage from "../pages/MainPage";
import React from 'react';
import RecipePage from "../pages/RecipePage";
import RecipiesCardPage from "../pages/RecipesCardsPage";
import NotFoundPage from "../components/shared/NotFoundPage";
import { HOME_PAGE, RECIPES_PAGE, RECIPE_INFO_PAGE,NOT_FOUND_PAGE } from "./consts";
export const routes = [
    { path: HOME_PAGE, element: MainPage },
    { path: RECIPES_PAGE, element: RecipiesCardPage },
    { path: RECIPE_INFO_PAGE, element: RecipePage },
    { path: NOT_FOUND_PAGE, element: NotFoundPage },
];