import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex w-full justify-between p-4 bg-gray-400 border rounded shadow-sm hover:shadow-gray-950">
        <div className="font-bold text-3xl">Fetcher</div>
        <div className="grid gap-2 grid-cols-2 wrap-anywhere">
          <Link
            to="/"
            className="bg-stone-200 px-3 py-2 rounded-2xl border hover:bg-gray-200 hover:font-extrabold hover:text-stone-600"
          >
            Home
          </Link>

          <Link
            to="/anime"
            className="bg-stone-200 px-3 py-2 rounded-2xl border hover:bg-pink-200 hover:font-extrabold hover:text-pink-600"
          >
            Anime
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
