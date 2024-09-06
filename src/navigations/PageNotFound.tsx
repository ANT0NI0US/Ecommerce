import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <main className="flexCenter h-screen w-full flex-col bg-light-color dark:bg-main-color">
      <h1 className="text-7xl font-extrabold tracking-widest text-orange-color-light dark:text-orange-color sm:text-9xl">
        404
      </h1>
      <h2 className="absolute z-10 rotate-12 px-2 text-center text-4xl font-black  text-primary-color-light dark:text-primary-color sm:text-6xl">
        Page Not Found
      </h2>
      <button
        aria-label="Go to home"
        className="mt-5 text-primary-color-light underline transition-all hover:font-bold dark:text-primary-color"
      >
        <Link to="/" replace>
          Go Home &rarr;
        </Link>
      </button>
    </main>
  );
}
