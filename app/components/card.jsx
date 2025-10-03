export default function Card({ source, title, rating }) {
  return (
    <article className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-xs sm:max-w-sm">
      <div className="relative w-full h-64 sm:h-72 overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500${source}`}
          alt={`poster of ${title}`}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs sm:text-sm px-2 py-1 rounded-lg">
          ⭐ {rating}
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 line-clamp-2">
          {title}
        </h2>
      </div>
    </article>
  );
}
