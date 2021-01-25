import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Specials from "../components/Specials";

function RecipeData({ match }) {
  const recipes = useSelector((state) => state.recipe.recipes);
  const [recipe, setRecipe] = useState({});
  const { id } = match.params;
  useEffect(() => {
    setRecipe(recipes.find((recipe) => recipe.uuid === id));
  }, [id, recipes]);
  console.log("Recipe Data", recipe);
  return (
    !isEmpty(recipe) && (
      <div className="min-h-screen">
        <div className=" max-w-6xl mx-auto bg-gray-100 bg-opacity-50">
          <div className="pt-24">
            <div className="flex flex-col h-full">
              <div className="w-full">
                <div className=" h-full">
                  <img
                    className="rounded-lg shadow-lg border-2 border-gray-600 max-w-9xl mx-auto"
                    src={process.env.REACT_APP_API_URL + recipe.images.medium}
                    alt="images"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <div className="p-4 flex uppercase justify-center text-5xl font-bold">
                  {recipe.title}
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-5 gap-4 p-4 border-2  rounded-lg border-gray-600 text-center">
                    <div>
                      <div className="font-semibold">Servings</div>
                      <div>{recipe.servings}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Prep Time</div>
                      <div>{recipe.prepTime}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Cook Time</div>
                      <div>{recipe.cookTime}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Post Date</div>
                      <div>{recipe.postDate}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Edit Date</div>
                      <div>{recipe.editDate}</div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="p-4 w-1/2 text-white ">
                    <div className="bg-gray-900 bg-opacity-50 rounded-lg h-full">
                      <div className="text-lg text-center font-bold py-4 pl-4">
                        Ingredients
                      </div>
                      <div className="p-4">
                        {recipe.ingredients.map((ingredient) => (
                          <div className="flex  capitalize text-sm p-2">
                            <div className="flex">
                              {`- ${ingredient.name} ${ingredient.amount} ${ingredient.measurement}`}
                              <Specials id={ingredient.uuid} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 w-1/2">
                    <div className="text-gray-100 h-full bg-gray-900 bg-opacity-50 rounded-lg">
                      <div className="text-lg py-4 font-bold text-center">
                        Directions
                      </div>
                      <div className="p-4">
                        {recipe.directions.map((direction) => (
                          <div className="text-sm p-2">
                            <div className="">{`• ${direction.instructions}`}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default RecipeData;
