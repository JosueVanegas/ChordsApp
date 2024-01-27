const SongCardMin = ({
  id,
  name = "cancion",
  artist = "artista",
  genre,
  album,
  year,
}) => {
  return (
    <div className="flex  items-center justify-around min-h-44 max-h-44 max-w-96 min-w-96  m-2 p-2 pl-0 bg-gray-100 ">
      <div className="flex flex-col max-w-44">
        <div className="flex flex-col">
          <h1 className="text-xl">{name.slice(0, 15)}</h1>
          <h3>{artist}</h3>
          <p>{album}</p>
        </div>
        <div>
          <p>
            {genre} - {year}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a href={`/songs/${id}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded">
            view
          </button>
        </a>
      </div>
    </div>
  );
};

export default SongCardMin;
