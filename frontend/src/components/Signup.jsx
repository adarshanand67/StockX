import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send POST request to server
    console.log(name, email, password);
    // console.log("User successfully signed up");
    if(name && email && password){
      console.log("User successfully signed up");
      navigate("/signin");
    }
    else{
      console.log("User not signed up");
    }
  };

  return (
    <div className="bg-gray-200 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm m-0">
          <h2 className="text-lg font-medium mb-4 text-center">Sign Up</h2>
        <form className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="email"
              className="w-full border border-gray-400 p-2 rounded-lg"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-400 p-2 rounded-lg"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-400 p-2 rounded-lg"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
