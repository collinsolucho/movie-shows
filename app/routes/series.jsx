import { Link } from "react-router";
import Card from "../components/card";

export function meta() {
  return [{ title: "movies" }, { name: "description", content: "movies!" }];
}

export async function loader(params) {
  let res = await fetch(`https://api.themoviedb.org/3/discover/tv`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
    },
  });
  let series = await res.json();
  return series.results;
}

export default function Series({ loaderData }) {
  return (
    <main className="max-w-5xl mx-auto mt-20">
      <h1 className="font-bold text-5xl text-orange-600">Series</h1>

      <div className="mt-8 grid grid-cols-3 gap-4">
        {loaderData.map((series) => (
          <Link key={series.id} to={`/series/${series.id}`}>
            <Card
              source={series.poster_path}
              title={series.name}
              rating={series.vote_average}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
