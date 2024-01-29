import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import Button from "./Button";

const RegisterForm = () => {
  const { register } = useAuth();
  const [data, setData] = useState({
    name: "",
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
    await register(data);
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
        <h3 className="">Register</h3>
      </div>
      <div className="flex flex-col items-start justify-center mb-5 text-white">
        <h2 className="text-left ">username</h2>
        <input
          className="text-center text-blue-900 p-2 border-2 border-blue-700 outline-green-500"
          id="name"
          type="text"
          name="name"
          placeholder="example"
          onChange={handleChange}
        />
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
      <div className="space-x-10">
        <Button variant="default" type="button" href="/auth/login">
          login
        </Button>
        <button className="bg-white text-blue-900 px-2 py-1 m-2" type="submit">
          register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
