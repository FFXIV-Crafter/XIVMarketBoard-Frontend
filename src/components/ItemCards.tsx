import Link from "next/link";
import React from "react";

const ItemCards = ({ recipeResult }) => {
  return (
    <div>
      <ol className="flex row justify-center">
        {recipeResult.slice(0, 10).map((recipe, value) => (
          <li
            key={value}
            className="p-4 rounded-md w-max my-8 mx-3 shadow-2xl text-center"
          >
            <Link href={`/recipe/${recipe.id}`}>
              <a>
                <h3>{recipe.name}</h3>
              </a>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ItemCards;
