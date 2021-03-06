import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Recipe, GetApiResults, ApiResponse } from "../types/types";
const apiUrl = "https://api.jarvinen.se/recipes";
const ItemPage: NextPage<{ recipes: Recipe[] }> = ({ recipes }) => {
  return (
    <div>
      <Head>
        <title>items</title>
      </Head>
      {recipes.map((Recipe) => {
        return (
          <div key={Recipe.id}>
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
  const res = await fetch(apiUrl);
  const { recipes }: ApiResponse = await res.json();
  return {
    props: {
      recipes: recipes
    }
  };
};

export default ItemPage;
