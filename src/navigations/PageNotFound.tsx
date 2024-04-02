import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-primary">
      <h1 className="text-9xl font-extrabold tracking-widest text-bgColor">
        404
      </h1>
      <div className="absolute rotate-12 rounded bg-gray px-2 text-sm text-bgColor">
        Page Not Found
      </div>
      <button className="mt-5 text-bgColor underline hover:bg-opacity-[0.9]">
        <Link to="/" replace>
          Go Home &rarr;
        </Link>
      </button>
    </main>
  );
}

export default PageNotFound;
