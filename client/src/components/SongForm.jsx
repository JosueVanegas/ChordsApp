import { FaFileUpload } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
const SongForm = () => {
  const [data, setData] = useState({
    name: "",
    artist: "",
    album: "single",
    genre: "",
    year: "",
    songUrl: "",
    partiture: "",
    lyric: "",
    chords: "",
  });
  const handleOnChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/api/song", data);
      console.log(response);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form className="flex flex-col m-10 gap-2" action="">
      <h1>add a new song</h1>
      <div className="flex items-center justify-between">
        <h2 className="text-lg ">name: </h2>
        <input
          className="px-10"
          type="text"
          name="name"
          onChange={handleOnChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg ">artist: </h2>
        <input
          className="px-10"
          type="text"
          name="artist"
          onChange={handleOnChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg ">genre: </h2>
        <input
          className="px-10"
          type="text"
          name="genre"
          onChange={handleOnChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg ">album: </h2>
        <input
          className="px-10"
          type="text"
          name="album"
          onChange={handleOnChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg ">year: </h2>
        <input
          className="px-10"
          type="number"
          name="year"
          min={1900}
          max={2090}
          onChange={handleOnChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg ">lyrics: </h2>
        <textarea
          className="resize-none w-64 h-40"
          type="text"
          name="lyric"
          onChange={handleOnChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg ">chords: </h2>
        <textarea
          type="text"
          name="chords"
          className="resize-none w-64 h-40"
          onChange={handleOnChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg ">Partiture:</h2>
        <label className="flex justify-center items-center py-2 px-12 bg-gray-500 text-white rounded-lg cursor-pointer hover:bg-green-800">
          <FaFileUpload className=" h-6 w-6" />
          <span>Seleccionar archivo</span>
          <input
            name="partiture"
            type="file"
            accept=".png,.jpg,.jpeg,.pdf"
            className="hidden"
            onChange={handleOnChange}
          />
        </label>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-lg ">video reference(url): </h2>
        <input
          type="url"
          className="px-10"
          name="songUrl"
          onChange={handleOnChange}
        />
      </div>
      <div className="flex items-center justify-center mt-5">
        <button
          className="text-lg bg-green-700 rounded-xl px-10 py-2 "
          type="submit"
          onClick={handleSubmit}
        >
          Add new song
        </button>
      </div>
    </form>
  );
};

export default SongForm;
