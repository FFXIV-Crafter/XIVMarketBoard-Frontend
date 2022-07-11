import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { Recipe, GetApiResults, ApiResponse } from "../../types/types";

const ItemPage: NextPage<{ Recipes: Recipe[] }> = ({ Recipes }) => {
  const router = useRouter();
  console.log(router.query.id);

  return (
    <div>
      {Recipes.map((Recipe) => {
        return (
          <div key={Recipe.id}>
            <a>potato</a>
            <Link href={`/recipe/${Recipe.id}`}>
              <a>
                <h3>{Recipe.name}</h3>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://api.jarvinen.se/recipe?recipeId=${context.query.id}`
  );
  const { recipes }: ApiResponse = await res.json();
  return {
    props: {
      Recipes: recipes
    }
  };
};

export default ItemPage;
