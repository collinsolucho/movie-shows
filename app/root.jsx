import {
  Form,
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import "./app.css";

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main>
          <nav className="bg-sky-950 shadow-md">
            <ul className="flex justify-center gap-6 px-4 sm:px-8 py-3">
              <li>
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-amber-50 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/series"
                  className="px-3 py-2 rounded-md text-amber-50 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                >
                  Series
                </Link>
              </li>
              <li>
                <Link
                  to="/movies"
                  className="px-3 py-2 rounded-md text-amber-50 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                >
                  Movies
                </Link>
              </li>
            </ul>
          </nav>

          {children}
        </main>

        <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white">MovieHub</h2>
              <p className="mt-2 text-sm">
                Your go-to place for trending movies, shows, and entertainment.
                Watch anytime, anywhere.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/movies" className="hover:text-white">
                    Movies
                  </a>
                </li>
                <li>
                  <a href="/series" className="hover:text-white">
                    Series
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Follow Us
              </h3>
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="hover:text-white">
                    <i className="fab fa-facebook-f"></i> Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    <i className="fab fa-twitter"></i> Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
            &copy; {new Date().getFullYear()} MovieHub. All rights reserved.
          </div>
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
