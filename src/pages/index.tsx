import type { GetServerSideProps, NextPage } from "next";
import { Recipe, ApiResponse } from "../types/types";
import Fuse from "fuse.js";
import SearchBar from "../components/SearchBar";
import ItemCards from "../components/ItemCards";
import { useState } from "react";
const apiUrl = "https://api.jarvinen.se/recipes";

const SearchWithItemCards = ({ recipes }: { recipes: Recipe[] }) => {
  const [query, setQuery] = useState("");
  const options = {
    keys: ["name", "id"]
  };
  const fuse = new Fuse(recipes, options);
  const results = fuse.search(query);
  const recipeResult = query ? results.map((result) => result.item) : recipes;

  return (
    <div className="w-3/6">
      <SearchBar query={query} setQuery={setQuery} />
      <ItemCards recipeResult={recipeResult} />
    </div>
  );
};
const Home: NextPage<{ recipes: Recipe[] }> = (props) => {
  let displayData;
  console.log(props.recipes);
  const recipes = props.recipes;
  // console.log(Object.values(items))
  return SearchWithItemCards({ recipes });
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(apiUrl);
  const { recipes }: ApiResponse = await res.json();
  return { props: { recipes } };
};
