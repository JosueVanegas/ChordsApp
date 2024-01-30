import { FaFileUpload } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import Toast from "./Toast";
// eslint-disable-next-line react/prop-types
const SongForm = ({ update = false }) => {
  const { user } = useAuth();
  const [success, setSuccess] = useState(false);
  const [fileName, setFileName] = useState();
  const [prevData, setPrevData] = useState();
  const modelToCreated = {
    name: "",
    artist: "",
    album: "single",
    genre: "",
    year: "",
    songUrl: "",
    docUrl: null,
    lyric: "",
    chords: "",
    addedBy: user.email,
  };
  const modelToUpdate = {
    name: "",
    artist: "",
    album: "single",
    genre: "",
    year: "",
    songUrl: "",
    docUrl: null,
    lyric: "",
    chords: "",
    updatedBy: user.email,
  };
  const getOldData = async () => {
    await axios
      .get("http://localhost:8081/api/song")
      .then((response) => setPrevData(response.body))
      .catch((error) => alert(error));
  };
  useEffect(() => {
    getOldData();
  }, [update]);
  const [data, setData] = useState(update ? modelToUpdate : modelToCreated);
  const handleOnChange = (event) => {
    if (event.target.name === "docUrl") {
      setData({
        ...data,
        [event.target.name]: event.target.files[0],
      });
      setFileName(data.docUrl.name);
    } else {
      setData({
        ...data,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }

      await axios.post("http://localhost:8081/api/song", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccess(true);
      event.target.reset();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <form
        className="flex flex-col m-10 gap-2 text-center "
        onSubmit={handleSubmit}
      >
        <h1>add a new song</h1>
        <div className="flex items-center justify-between">
          <h2 className="text-lg ">name: </h2>
          <input
            id="name"
            className="px-10"
            type="text"
            name="name"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg ">artist: </h2>
          <input
            id="artist"
            className="px-10"
            type="text"
            name="artist"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg ">genre: </h2>
          <input
            id="genre"
            className="px-10"
            type="text"
            name="genre"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg ">album: </h2>
          <input
            id="album"
            className="px-10"
            type="text"
            name="album"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg ">year: </h2>
          <input
            id="year"
            className="px-10"
            type="text"
            name="year"
            value={2024}
            min={4}
            maxLength={4}
            onChange={handleOnChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg ">lyrics: </h2>
          <textarea
            id="lyric"
            className="resize-none w-64 h-40"
            type="text"
            name="lyric"
            rows={5}
            onChange={handleOnChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg ">chords: </h2>
          <textarea
            id="chords"
            type="text"
            name="chords"
            rows={5}
            className="resize-none w-64 h-40"
            onChange={handleOnChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg ">document:</h2>
          <label className="flex justify-center items-center py-2 px-12 bg-gray-500 text-white rounded-lg cursor-pointer hover:bg-green-800">
            <FaFileUpload className=" h-6 w-6" />
            <span>Seleccionar archivo</span>

            <input
              id="docUrl"
              name="docUrl"
              type="file"
              accept=".png,.jpg,.jpeg,.pdf"
              className="hidden"
              onChange={handleOnChange}
            />
          </label>
        </div>
        <div>
          {fileName ? <p>File selected: {fileName}</p> : "there's no file"}
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg ">video reference(url): </h2>
          <input
            id="songUrl"
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
          >
            Add new song
          </button>
        </div>
      </form>
      {success ? <Toast message={"song created successfully"}></Toast> : ""}
    </>
  );
};

export default SongForm;
