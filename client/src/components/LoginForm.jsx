import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, Navigate } from "react-router-dom";
import Toast from "./Toast";

const LoginForm = () => {
  const { login, user } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(data);
  };

  return (
    <form
      className="flex flex-col items-center justify-center text-white bg-transparent"
      onSubmit={handleSubmit}
    >
      <div className="text-center">
        <Link className="flex flex-col items-center justify-center" to="/">
          <img
            className="h-10 w-10 animate-bounce"
            src="/raderWhite.png"
            alt=""
          />
          <h1 className="text-4xl">Rader</h1>
        </Link>
        <h3 className="">login</h3>
      </div>
      <div className="flex flex-col items-start justify-center mb-5 text-white">
        <h2 className="text-left ">email</h2>
        <input
          className="text-center text-blue-900 p-2 border-2 border-blue-700 outline-green-500"
          id="email"
          type="email"
          name="email"
          placeholder="example@gmail.com"
          onChange={handleChange}
        />
        <h2 className="text-left ">password</h2>
        <input
          className="text-center text-blue-900 p-2 border-2 border-blue-700 outline-green-500"
          id="password"
          type="password"
          name="password"
          placeholder="mypassword"
          onChange={handleChange}
        />
      </div>
      <div>
        <button className="bg-white text-blue-900 px-2 py-1 m-2" type="submit">
          log in
        </button>
      </div>
      <div>
        <Link className="text-white underline" to="/auth/register">
          register a new account
        </Link>
      </div>
      {user && (
        <>
          <Toast message={`Welcome back ${user.name}`} />
          <Navigate to={"/"} />;
        </>
      )}
    </form>
  );
};

export default LoginForm;
