import { Link } from "react-router";
import Card from "../components/card";

export async function loader(params) {
  let res = await fetch(`https://api.themoviedb.org/3/discover/movie`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
    },
  });
  let movies = await res.json();

  return movies.results;
}

export default function Movies({ loaderData }) {
  return (
    <main className="max-w-5xl mx-auto mt-20">
      <h1 className="text-5xl font-bold text-center text-orange-600">movies</h1>
      <div className="mt-8 grid grid-cols-3 gap-4">
        {loaderData.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <Card
              rating={movie.vote_average}
              source={movie.poster_path}
              title={movie.title}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
