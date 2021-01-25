import React from "react";
import { isEmpty } from "lodash";
import Recipe from "../components/Recipe";
import { Link, Route, Switch } from "react-router-dom";
import RecipeData from "../components/RecipeData";
import { useSelector } from "react-redux";

import NavBar from "../components/NavBar";

function RecipePage({ match }) {
  const recipes = useSelector((state) => state.recipe.recipes);
  return (
    <div className="bg2 font-raleway">
      <NavBar />
      <div className="h-24"></div>
      <Switch>
        <Route path={match.url + "/:id"} component={RecipeData} />
        <Route
          path={match.url + "/"}
          render={() => (
            <div className=" text-gray-100 min-h-screen">
              <div className="pt-6">
                <div className="max-w-6xl mx-auto">
                  <div className="bg-gray-900 bg-opacity-50 rounded-lg uppercase text-6xl flex justify-center p-4 border-2 border-gray-400">
                    Recipe
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 max-w-6xl mx-auto  ">
                {!isEmpty(recipes) &&
                  recipes.map((recipe) => (
                    <div key={recipe.uuid}>
                      <Link to={match.url + "/" + recipe.uuid}>
                        <Recipe recipe={recipe} />
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}
export default RecipePage;
