import SongForm from "../../components/SongForm";

const AdminSongs = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-200">
      <h1>admin songs</h1>
      <SongForm />
    </div>
  );
};

export default AdminSongs;
