import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Anime() {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime?type=movie")
      .then((res) => res.json())
      .then((data) => {
        setAnime(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-4">
      <p className="text-2xl font-bold mb-4 text-center">Anime Movies</p>

      {/* Responsive Grid */}
      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-4
      "
      >
        {anime.map((a) => (
          <div
            key={a.mal_id}
            className="border rounded-lg p-3 hover:bg-pink-100 transition shadow-sm"
          >
            <img
              src={a.images.jpg.image_url}
              alt={a.title}
              className="w-full h-64 object-cover rounded"
            />

            <h2 className="text-blue-500 font-semibold mt-2 line-clamp-2">
              {a.title}
            </h2>

            <p className="text-red-500">Rank: {a.rank}</p>
            <p>⭐ Rating: {a.rating}</p>

            <button
              onClick={() => window.open(a.url, "_blank")}
              className="mt-2 w-full px-3 py-2 rounded bg-pink-600 text-white hover:bg-pink-700"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Anime;
