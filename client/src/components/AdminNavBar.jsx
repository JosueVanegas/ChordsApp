/* eslint-disable react/prop-types */
import { BiUserCircle } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const menu = [
  { name: "Users", path: "/admin/users" },
  { name: "Songs", path: "/admin/songs" },
];

const AdminNavBar = () => {
  const { user } = useAuth();
  const isAdmin = user && user.isAdmin;

  return (
    <div className="flex flex-col bg-gradient-to-l from-slate-900 to-slate-700">
      <nav className="flex items-center justify-between p-5 pt-0 pb-0">
        <div className="p-3 cursor-pointer transition-transform hover:-translate-y-1">
          <Link to="/">
            <h1 className="text-3xl text-green-500">Rader</h1>
          </Link>
        </div>
        <div className="">
          <ul className="flex items-center justify-center space-x-2">
            {menu.map((item) => (
              <MenuItem key={item.name} name={item.name} path={item.path} />
            ))}
          </ul>
        </div>
        {user ? (
          <div>
            {isAdmin ? (
              <Link to="/admin/dashboard">
                <div className="flex justify-center items-center gap-2 text-white">
                  <div className="text-right">
                    <p className="text-md text-green-500">{user.name}</p>
                  </div>

                  <BiUserCircle className="text-green-500 cursor-pointer h-10 w-10 hover:-translate-y-1" />
                </div>
              </Link>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};

const MenuItem = ({ name, path }) => {
  return (
    <li key={name}>
      <div className="transition hover:bg-white rounded-2xl">
        <NavLink
          className="p-2 text-white text-md hover:text-slate-800"
          to={path}
        >
          {name}
        </NavLink>
      </div>
    </li>
  );
};

export default AdminNavBar;
