import React, { useEffect, useState } from "react";
import { useNavigate, useRoutes } from "react-router-dom";

interface InputProps {
  name: string;
}

interface ErrorProps {
  name: string;
  login: string;
}

const regex = /^[a-zA-Z0-9 ]{5,}$/;

const LoginPage = () => {
  const history = useNavigate();
  const [state, setState] = useState<InputProps>({ name: "" });
  const [errors, setErros] = useState<ErrorProps>({ name: "", login: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState(() => ({
      [name]: value,
    }));
  };

  useEffect(() => {
    let error = "";
    if (state.name !== "" && !regex.test(state.name)) {
      error = "Name should be Alphanumeric and mimimum 5 length";
    }
    setErros((pre) => ({
      ...pre,
      login: "",
      name: error,
    }));
  }, [state]);

  const loginToChat = () => {
    if (state.name && !errors.name) {
      localStorage.setItem("username", state.name);
      history("/chat");
    } else if (!errors.name) {
      setErros((pre) => ({
        ...pre,
        login: "Please check Name error",
      }));
    } else {
      setErros((pre) => ({
        ...pre,
        login: "Please check Name",
      }));
    }
  };

  return (
    <div className="login-page flex justify-center my-10">
      <div className="card border-2  md:w-1/3 shadow-lg p-4 flex flex-col rounded-md">
        <p className="text-center text-xl font-extrabold">
          Welcome To Chat Bot
        </p>
        <p className="my-2 text-center text-sm text-gray-600">
          Enter your Name and Press Login to start Chat with Members
        </p>
        <input
          type="text"
          placeholder="Enter your name"
          value={state.name}
          name="name"
          onChange={handleChange}
          className="border-2 rounded-md h-10 p-2 hover:border-blue-600"
        />
        {errors.name && (
          <p className="text-xs ml-2 text-gray-500">{errors.name}</p>
        )}
        <button
          className="border-2 p-2 rounded-md mt-3 text-white font-semibold border-blue-500 bg-blue-500 hover:bg-blue-600 cursor-pointer "
          onClick={loginToChat}
        >
          Login
        </button>
        {errors.login && (
          <p className="text-xs ml-2 text-red-600">{errors.login}</p>
        )}
      </div>
    </div>
  );
};
export default LoginPage;
