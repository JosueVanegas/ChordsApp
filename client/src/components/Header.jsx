import { BiUserCircle } from "react-icons/bi";
/* eslint-disable react/prop-types */
import Button from "./Button";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const menu = [
  { name: "Home", path: "/" },
  { name: "Songs", path: "/songs" },
];

const Header = () => {
  const { user } = useAuth();
  const isAdmin = user && user.isAdmin;

  return (
    <div className="flex flex-col bg-gradient-to-r from-blue-600 to-blue-900">
      <nav className="flex items-center justify-between p-5 pt-0 pb-0">
        <div className="p-3 cursor-pointer transition-transform hover:-translate-y-1">
          <h1 className="text-white text-3xl ">Rader</h1>
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
                    <p className="text-md">{user.name}</p>
                    <p className="text-sm bg-red-600 px-2 ">admin</p>
                  </div>

                  <BiUserCircle className="text-green-500 cursor-pointer h-10 w-10 hover:-translate-y-1" />
                </div>
              </Link>
            ) : (
              <div className="flex justify-center items-center gap-2 text-white">
                <p className="text-md">{user.name}</p>
                <Link to="/dashboard">
                  <BiUserCircle className=" cursor-pointer h-10 w-10 hover:-translate-y-1" />
                </Link>
              </div>
            )}
          </div>
        ) : (
          <Button href="/auth/login">log in</Button>
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
          className="p-2 text-white text-md hover:text-blue-800"
          to={path}
        >
          {name}
        </NavLink>
      </div>
    </li>
  );
};

export default Header;
