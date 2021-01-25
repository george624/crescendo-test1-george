import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import RecipeData from "./components/RecipeData";

import LandingPage from "./pages/LandingPage";
import RecipePage from "./pages/RecipePage";
import { getRecipes, getSpecials } from "./redux/ducks/recipe";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getSpecials());
  }, [dispatch]);

  return (
    <Switch>
      <Route path="/recipedata" component={RecipeData} />
      <Route path="/menu" component={RecipePage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
}

export default App;
