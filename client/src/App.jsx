import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import Header from "./components/Header";
import DashboardAdmin from "./pages/admin/DashboardAdmin.jsx";
import AdminSong from "./pages/admin/AdminSongs.jsx";
import AdminUsers from "./pages/admin/AdminUsers.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Song from "./pages/Song.jsx";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Page404 from "./pages/404/Page404.jsx";
import AdminNavBar from "./components/AdminNavBar.jsx";
import SongForm from "./components/SongForm.jsx";
function App() {
  const location = useLocation();
  const showHeader = ![
    "/auth/register",
    "/auth/login",
    "/admin/dashboard",
    "/admin/songs",
    "/admin/users",
    "*",
  ].includes(location.pathname);
  const adminRoutes = location.pathname.startsWith("/admin");
  return (
    <main>
      {showHeader && <Header />}
      {adminRoutes && <AdminNavBar />}
      <Routes>
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/song/:id" element={<Song />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/admin/songs" element={<AdminSong />} />
        <Route path="/admin/songs/create" element={<SongForm />} />
        <Route path="/admin/songs/update/:id" element={<SongForm />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </main>
  );
}

export default App;
