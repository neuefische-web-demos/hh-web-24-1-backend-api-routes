//import { jokes } from "@/lib/data";
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Joke() {
  const router = useRouter();
  const { id } = router.query;
  const { data: joke } = useSWR(`/api/jokes/${id}`);
  console.log(joke);
  //const joke = jokes.find((joke) => joke.id === id);

  if (!joke) {
    return <>joke not found..</>;
  }

  return (
    <>
      <small>ID: {joke.id}</small>
      <h1>{joke.joke} </h1>
      <Link href="/">Back to all</Link>
    </>
  );
}
