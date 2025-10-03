export async function loader({ params }) {
  let seriesId = params.id;

  let res = await fetch(`https://api.themoviedb.org/3/tv/${seriesId}`, {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGM1YzViZjk3ZWNmODAyYTY0NDJmMTRhMjBhZjgxMyIsIm5iZiI6MTc1MjcyMzYwMS44MzM5OTk5LCJzdWIiOiI2ODc4NzA5MTI2ZDI2ZjVlZjUwNGU4ZWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7EKQSaYb_ZxmvCYP4pmndXoqBUEitKiAh6QKjaFuu4c",
    },
  });

  let show = await res.json();

  return show;
}

export default function Shows({ loaderData }) {
  return (
    <main className="max-w-5xl mx-auto mt-20 p-4 sm:p-6">
      <h1 className="font-bold text-3xl sm:text-4xl text-gray-900 dark:text-gray-100">
        {loaderData.name}
      </h1>

      <img
        src={`https://image.tmdb.org/t/p/w500${loaderData.poster_path}`}
        alt={`Poster of ${loaderData.name}`}
        className="mt-8 rounded-xl shadow-lg w-full max-h-[600px] object-cover"
      />

      <p className="mt-6 text-lg font-semibold text-orange-500">
        ⭐ {loaderData.vote_average}
      </p>

      <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        {loaderData.overview}
      </p>
    </main>
  );
}
