import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <main className="bg-primary flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-bgColor text-9xl font-extrabold tracking-widest">
        404
      </h1>
      <div className="bg-gray text-bgColor absolute rotate-12 rounded px-2 text-sm">
        Page Not Found
      </div>
      <button
        aria-label="Go to home"
        className="text-bgColor mt-5 underline hover:bg-opacity-[0.9]"
      >
        <Link to="/" replace>
          Go Home &rarr;
        </Link>
      </button>
    </main>
  );
}

export default PageNotFound;
