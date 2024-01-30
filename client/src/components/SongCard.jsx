import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const SongCardMin = ({
  id,
  name = "cancion",
  artist = "artista",
  genre,
  album,
  year,
  isAdmin = false,
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
        <div className="flex justify-center items-center gap-2 mt-auto mb-5">
          <div>
            <Link to={`/song/${id}`}>
              <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 rounded">
                <BiShow />
              </button>
            </Link>
          </div>
          {isAdmin ? (
            <>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-2 rounded">
                <BiEdit />
              </button>
              <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-2 rounded">
                <AiOutlineDelete />
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </Link>
  );
};

export default SongCardMin;
