//import { jokes } from "@/lib/data";
import Link from "next/link";
//import { useState, useEffect } from "react";
import useSWR from "swr";

export default function JokeList() {
  const { data: jokes, isLoading } = useSWR("/api/jokes");

  // const [jokes, setJokes] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("/api/jokes");
  //     const data = await response.json();

  //     setJokes(data);
  //   }

  //   fetchData();
  // }, []);

  if (!jokes) {
    return;
  }

  if (isLoading) {
    return <>loading..</>;
  }

  return (
    <ul>
      {jokes.map((joke) => (
        <li key={joke.id}>
          <Link href={`/${joke.id}`}>{joke.joke}</Link>
        </li>
      ))}
    </ul>
  );
}
