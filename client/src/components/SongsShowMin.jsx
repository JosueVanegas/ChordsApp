import { useEffect, useState } from "react";
import axios from "axios";
const SongShowMin = () => {
  const [songs, setSongs] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/song")
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {songs && songs.map((item, index) => <li key={index}>{item.artist}</li>)}
    </div>
  );
};

export default SongShowMin;
