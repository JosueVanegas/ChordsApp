/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SongCardMin = ({
  id,
  name = "cancion",
  artist = "artista",
  genre,
  album,
  year,
}) => {
  return (
    <Link to={`/song/${id}`}>
      <div
        className="flex flex-col border-4 cursor-pointer  items-center justify-center min-h-64 max-h-64 max-w-44 min-w-44  m-3 px-2 bg-gray-100 
    hover:bg-white hover:border-blue-900 transition-colors"
      >
        <div className="flex flex-col items-start ">
          <div className="flex flex-col ">
            <h1 className="text-xl font-bold   ">{name.slice(0, 20)}</h1>
            <h3>artist: {artist}</h3>
            <p>album: {album ? album : "-"} </p>
          </div>
          <div>
            <p>genre: {genre}</p>
            <p>year: {year}</p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-auto mb-5">
          <Link to={`/song/${id}`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
              view details
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default SongCardMin;
