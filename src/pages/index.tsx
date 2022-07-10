import type { GetServerSideProps, NextPage } from "next";
import ErrorPage from "next/error";
import Head from "next/head";
import { trpc } from "../utils/trpc";
const apiUrl = "http://localhost:8000/all-item-names";

type Data = {
  message: string;
  dict: { [key: string]: string };
};

const Home: NextPage<{ data: Data }> = (props) => {
  let displayData;
  console.log(props.data);
  const items = props.data.dict;
  // console.log(Object.values(items))
  console.log(items[2]);
  console.log(Object.keys(items));
  for (const i in Object.keys(items)) {
    const value = items[i];
    console.log(i + " 123: " + value);
  }

  displayData = () => {
    //return console.log(Object.keys(items))

    for (const key in items) {
      const value = items[key];
      console.log(key + " : " + value);
    }
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
  const data = await res.json();
  return { props: { data } };
}
