import type { GetServerSideProps, NextPage } from "next";
import ErrorPage from "next/error";
import Head from "next/head";
import { Item, ApiResponse, GetApiResults } from "../types/types";
import { trpc } from "../utils/trpc";
const apiUrl = "https://api.jarvinen.se/items";

const Home: NextPage<{ items: Item[] }> = (props) => {
  let displayData;
  console.log(props.items);
  const items = props.items;
  // console.log(Object.values(items))
  console.log(items[2]);
  console.log(items);

  displayData = () => {
    //return console.log(Object.keys(items))
    // return items.map(function (val, i) {
    //   return (
    //     <tr key={val.Id}>
    //       <td>
    //         {val.Id}
    //       </td>
    //       <td>
    //         {val.Name}
    //       </td>
    //     </tr>
    //   )
    // })
  };
  return (
    <table className="ui inverted table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await fetch(apiUrl);
  const { items }: ApiResponse = await res.json();
  return { props: { items } };
}
