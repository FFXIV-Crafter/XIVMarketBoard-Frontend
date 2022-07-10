import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import ErrorPage from "next/error";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { trpc } from "../utils/trpc";
import { Character, GetCharacterResults } from "../types/types";
import imageLoader from "../imageLoader";
import Layout from "../components/Layout";
import { ReactElement } from "react";

const ItemPage: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    <div>
      <Head>
        <title>items</title>
      </Head>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <a>potato</a>
            <Link href={`/characters/${character.id}`}>
              <a>
                <h3>{character.name}</h3>
              </a>
            </Link>
            <Image
              unoptimized
              loader={imageLoader}
              src={character.image}
              alt={character.name}
              width="200"
              height="200"
            />
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharacterResults = await res.json();
  return {
    props: {
      characters: results
    }
  };
};

export default ItemPage;
