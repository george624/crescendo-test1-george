import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Specials({ id }) {
  const [special, setSpecial] = useState({});
  const specials = useSelector((state) => state.recipe.specials);
  useEffect(() => {
    console.log(specials);
    if (!isEmpty(specials)) {
      setSpecial(
        specials.find((special) => {
          console.log(special.ingredientId);
          console.log(id);
          return special.ingredientId === id;
        })
      );
    }
  }, [specials, id]);
  const [hover, setHover] = useState(false);
  const onHover = () => {
    let hovering = hover ? "absolute" : "hidden";
    return hovering + " bg-gray-600 rounded-lg p-2 -top-10 left-20 w-64";
  };
  //   console.log("special", special);
  //   console.log("id", id);
  return (
    !isEmpty(special) && (
      <div
        className="relative px-2"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="bg-gray-100 bg-opacity-50 px-2 py-1">
          <p className="text-indigo-700">Specials!</p>
        </div>
        <div>
          <div className={onHover()}>
            <div className="p-2 border-2 rounded-xl">
              <h1>{special.title}</h1>
              <p>{special.text}</p>
              <p>{special.type}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Specials;
