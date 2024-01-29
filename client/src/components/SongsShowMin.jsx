import { TbZoomReset } from "react-icons/tb";
import { useEffect, useState } from "react";
import axios from "axios";
import SongCardMin from "./SongCardMin";

const SongShowMin = () => {
  const [songs, setSongs] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleSearch = (event) => {
    event.preventDefault();
    const search = event.target.value;
    const newData = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.artist.toLowerCase().includes(search.toLowerCase())
      );
    });
    setSongs(newData);
  };
  const handleReset = () => {
    setSongs(data);
  };
  const loadData = async () => {
    setLoading(true);
    await axios
      .get("http://localhost:8081/api/song", { withCredentials: true })
      .then((response) => {
        setData(response.data);
        setSongs(response.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-start gap-5 m-5">
        <h1>Search</h1>
        <input
          className="border-2 outline-blue-500 px-2 py-2 text-center focus:outline-blue-900"
          placeholder="song/artist"
          type="text"
          onChange={handleSearch}
        />
        <button
          onClick={handleReset}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded"
        >
          <TbZoomReset />
        </button>
      </div>
      <div className="flex flex-wrap">
        {loading && <h1 className="text-4xl">loading</h1>}
        {songs &&
          songs.map((item) => (
            <SongCardMin
              key={item._id}
              id={item._id}
              name={item.name}
              artist={item.artist}
              year={item.year}
              album={item.album}
              genre={item.genre}
            ></SongCardMin>
          ))}
      </div>
    </div>
  );
};

export default SongShowMin;
