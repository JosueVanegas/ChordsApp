import SongList from "../../components/SongList";
const AdminSongs = () => {
  return (
    <div className="">
      <SongList isAdmin={true} />
    </div>
  );
};

export default AdminSongs;
