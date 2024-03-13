import { jokes } from "@/lib/data";

export default function handler(request, response) {
  const { id } = request.query;
  const joke = jokes.find((joke) => joke.id === id);

  if (!joke) {
    response.status(404).json({ message: "Nix da!" });
  }

  response.status(200).json(joke);
}
