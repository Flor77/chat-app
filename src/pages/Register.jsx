import React, { useState } from "react";
import { Link } from "react-router-dom";
import addAvatar from "../assets/addAvatar.png";

const Register = () => {
  const initialValue = {
    name: "",
    email: "",
    password: "",
  };
  const [formValue, setFormValue] = useState(initialValue);

  return (
    <div className="max-w-md mx-2 bg-white flex flex-col rounded-2xl px-4 py-2">
      <h1 className="text-4xl text-[#5d5b8d] text-center font-bold">Chat</h1>
      <h3 className="text-md text-[#5d5b8d] mt-2 mb-2 text-center font-semibold text-gray-500">
        Register
      </h3>

      <div className="flex justify-center items-center">
        <form>
          <input
            type="text"
            id="name"
            value={formValue.name}
            placeholder="Name"
            className="w-full px-4 py-2 text-xl !text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mt-4 mb-4 border-[1px]"
          />
          <input
            type="email"
            id="email"
            value={formValue.email}
            placeholder="Email"
            className="mb-4 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out border-[1px]"
          />
          <input
            type="password"
            id="password"
            value={formValue.password}
            placeholder="Password"
            className="mb-4 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out border-[1px]"
          />
          <input className="hidden" type="file" id="file" />
          <label
            htmlFor="file"
            className="flex items-center mb-4 cursor-pointer"
          >
            <img src={addAvatar} alt="avatar" className="w-[30px] mr-2" />
            <span className="text-sm !text-gray-500 hover:!text-gray-700 ">
              Add an avatar
            </span>
          </label>
          <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800">
            Sign up
          </button>
        </form>
      </div>
      <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mt-4">
        <p className="mb-2 !text-gray-500">Already have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
