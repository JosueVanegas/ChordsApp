import { useState } from "react";
import axios from "axios";
import Button from "./Button";

const RegisterForm = () => {
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
    await axios
      .post("http://localhost:8081/api/register", data)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((err) => alert(err));
  };

  return (
    <form
      className="flex flex-col items-center justify-center text-white bg-transparent"
      onSubmit={handleSubmit}
    >
      <div className="text-center">
        <a href="/">
          <h1 className="text-4xl">Rader</h1>
        </a>
        <h3 className="">Register</h3>
      </div>
      <div className="flex flex-col items-start justify-center mb-5 text-white">
        <h2 className="text-left ">username</h2>
        <input
          className="text-center text-blue-900 p-2 border-2 border-blue-700 outline-green-500"
          id="email"
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
        <Button variant="primary" type="submit">
          register
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
