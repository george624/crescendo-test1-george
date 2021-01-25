import React from "react";

function Recipe({ recipe }) {
  console.log(recipe);
  return (
    <div className="pb-12 font-raleway">
      <div className="p-4 h-80 my-10">
        <img
          className="h-full w-full border-gray-900 rounded-lg"
          src={process.env.REACT_APP_API_URL + recipe.images.full}
          alt="images"
        />
        <div className="bg-gray-900 bg-opacity-50 mt-2 p-4 text-center">
          <div className="uppercase font-bold text-lg">{recipe.title}</div>
          <div className="text-sm">{recipe.description}</div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
