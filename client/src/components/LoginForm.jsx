import { useState } from "react";
import axios from "axios";
import Button from "./Button";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState();

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:8081/api/login", data)
      .then((response) => {
        const info = response.data.message;
        setMessage(info);
        alert(info);
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
        <Button variant="primary" type="submit">
          log in
        </Button>
      </div>
      <div>
        <a className="text-white underline" href="/auth/register">
          register a new account
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
