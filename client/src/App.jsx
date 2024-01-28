import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import Header from "./components/Header";
import DashboardAdmin from "./pages/admin/DashboardAdmin.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Song from "./pages/Song.jsx";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Page404 from "./pages/404/Page404.jsx";
function App() {
  const location = useLocation();
  const showHeader = !["/auth/register", "/auth/login", "*"].includes(
    location.pathname
  );

  return (
    <main>
      {showHeader && <Header />}

      <Routes>
        <Route path="/auth/register" element={<Register />}></Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/songs" element={<Songs />}></Route>
        <Route path="/song/:id" element={<Song />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/admin/dashboard" element={<DashboardAdmin />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </main>
  );
}

export default App;
