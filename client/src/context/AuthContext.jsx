/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
export const UserContext = createContext();

export const useAuth = () => {
  const context = useContext(UserContext);
  if (!context) throw Error("useAuth must be used within an AuthProvider");
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const saveUserToLocalStorage = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const register = (data) => {
    axios
      .post("http://localhost:8081/api/register", data)
      .then((response) => {
        setUser(response.data);
        saveUserToLocalStorage(response.data);
      })
      .catch((err) => alert(err));
  };

  const login = (data) => {
    axios
      .post("http://localhost:8081/api/login", data, { withCredentials: true })
      .then((response) => {
        const loggedInUser = response.data;

        if (loggedInUser && loggedInUser.name) {
          setUser(loggedInUser);
          saveUserToLocalStorage(loggedInUser);
        } else {
          console.error("Invalid user data received from server");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {}, [user]);

  return (
    <UserContext.Provider value={{ user, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
