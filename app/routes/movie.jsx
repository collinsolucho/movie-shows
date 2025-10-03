export async function loader({ params }) {
  console.log(params);
  let movieId = params.id;

  let res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGM1YzViZjk3ZWNmODAyYTY0NDJmMTRhMjBhZjgxMyIsIm5iZiI6MTc1MjcyMzYwMS44MzM5OTk5LCJzdWIiOiI2ODc4NzA5MTI2ZDI2ZjVlZjUwNGU4ZWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7EKQSaYb_ZxmvCYP4pmndXoqBUEitKiAh6QKjaFuu4c",
    },
  });
  let movie = await res.json();
  // console.log("movie", { movie });
  return movie;
}

export default function Movie({ loaderData }) {
  return (
    <main className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        {loaderData.title}
      </h1>

      <section className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w500${loaderData.poster_path}`}
            alt={`Poster of ${loaderData.title}`}
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-2">
              ⭐ Rating:{" "}
              <span className="font-semibold">{loaderData.vote_average}</span>
            </p>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              {loaderData.overview}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
