import type { GetServerSideProps, NextPage } from "next";
import ErrorPage from "next/error";
import Head from "next/head";
import { trpc } from "../utils/trpc";
const apiUrl = 'http://localhost:8000/all-items'
type Data = {
  message: string;
  Items: [{
    Id: number;
    Name: string;
    CanBeCrafted: boolean;
    IsMarketable: boolean;

  }]
}

const Home: NextPage<{ data: Data }> = props => {
  let displayData;
  console.log(props.data.Items)
  let items = props.data.Items;

  displayData = () => {
    return items.map(function (val, i) {
      return (
        <tr key={val.Id}>
          <td>
            {val.Id}
          </td>
          <td>
            {val.Name}
          </td>
          <td>
            {val.CanBeCrafted}
          </td>
          <td >
            {val.IsMarketable.toString()}
          </td>
        </tr>
      )
    })
  }
  return <table className="ui inverted table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>CanBeCrafted</th>
        <th>IsMarketable</th>
      </tr>
    </thead>
    <tbody>
      {displayData()}
    </tbody>
  </table>
};

export default Home;

export async function getServerSideProps() {
  const res = await fetch(apiUrl);
  const data = await res.json();
  return {props: {data}}
}

