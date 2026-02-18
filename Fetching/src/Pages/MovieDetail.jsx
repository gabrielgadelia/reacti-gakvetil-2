import { useParams } from "react-router";

const movies = [
  "The Shawshank Redemption",
  "The Godfather",
  "Inception",
  "Parasite",
  "The Dark Knight",
  "Pulp Fiction",
  "Interstellar",
  "Spirited Away",
  "The Matrix",
  "Forrest Gump",
  "The Lord of the Rings: The Fellowship of the Ring",
  "Fight Club",
  "Gladiator",
  "The Social Network",
  "Whiplash",
  "Mad Max: Fury Road",
  "La La Land",
  "The Silence of the Lambs",
  "Titanic",
  "Everything Everywhere All at Once",
];

export default function Movies() {
  const params = useParams();
  console.log(params.id);

  return <div>Movies {movies[params - 1]}</div>;
}
