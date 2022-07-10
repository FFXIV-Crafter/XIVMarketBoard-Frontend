import { GetServerSideProps } from "next";
import Image from "next/image";
import imageLoader from "../../imageLoader";
import { useRouter } from "next/router";
import { ItemNames, GetApiResults } from "../../types/types";

const apiUrl = "http://localhost:8000/all-item-names";
function ItemPage({ itemNames }: { itemNames: ItemNames }) {
  const router = useRouter();
  console.log(router.query.id);
  return (
    <div>
      <h1>{character.name}</h1>

      <Image
        loader={imageLoader}
        unoptimized
        src={character.image}
        alt={character.name}
        width="200px"
        height="200px"
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (conext) => {
  const res = await fetch(
    "https://rickandmortyapi.com/api/character/${context.query.id}"
  );
  const character = await res.json();

  return {
    props: {
      character
    }
  };
};

export default ItemPage;
