import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaCopy } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import copy from "clipboard-copy";

const Song = () => {
  const [data, setData] = useState();
  const [lyricsCopy, setLyricsCopy] = useState("");
  const [chordsCopy, setChordsCopy] = useState("");
  const { id } = useParams();

  const handleCopyLyrics = () => {
    copy(data.lyric);
    setLyricsCopy("Lyrics Copiadas");
  };

  const handleCopyChords = () => {
    copy(data.chords);
    setChordsCopy("Acordes Copiados");
  };

  useEffect(() => {
    const handleData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/api/song/${id}`,
          { responseType: "json" }
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    handleData();
  }, [id]);

  return (
    <div className="flex items-center justify-center">
      {data && (
        <div className="flex flex-col gap-10">
          <div className="mt-10">
            <h1>{data.name}</h1>
            {data.artist && (
              <h2>
                artist: <span className="font-bold">{data.artist}</span>
              </h2>
            )}
            {data.genre && (
              <h2>
                genre: <span className="font-semibold">{data.genre}</span>
              </h2>
            )}
            {data.album && (
              <h2>
                album: <span className="font-semibold">{data.album}</span>
              </h2>
            )}
          </div>
          <div className="">
            {data.lyric && (
              <>
                <div className="flex items-center justify-between gap-10">
                  <h2>lyrics:</h2>
                  <button
                    onClick={handleCopyLyrics}
                    className="flex items-center gap-2 bg-gray-600 rounded-xl px-2 py-1 text-white mb-2"
                  >
                    {lyricsCopy ? (
                      <AiOutlineCheckCircle className="text-green-600 h-6 w-6" />
                    ) : (
                      <FaCopy />
                    )}
                    copy
                  </button>
                </div>
                <p className="bg-gray-100 h-96 p-5 overflow-auto max-h-44">
                  {data.lyric}
                </p>
              </>
            )}
            {data.chords && (
              <>
                <div className="flex items-center justify-between gap-10 mt-5">
                  <h2>chords:</h2>
                  <button
                    onClick={handleCopyChords}
                    className="flex items-center gap-2 bg-gray-600 rounded-xl px-2 py-1 text-white mb-2"
                  >
                    {chordsCopy ? (
                      <AiOutlineCheckCircle className="text-green-600 h-6 w-6" />
                    ) : (
                      <FaCopy />
                    )}
                    copy
                  </button>
                </div>
                <p className="bg-gray-100 h-96 p-5 overflow-auto max-h-44">
                  {data.chords}
                </p>
              </>
            )}
          </div>
          {data.docUrl && (
            <div className="flex justify-center items-center mb-20">
              <a
                className="bg-blue-800 px-2 py-2 hover:bg-blue-600"
                download={`${id}`}
                href={`http://localhost:8081/${data.docUrl}`}
              >
                Download partiture
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Song;
