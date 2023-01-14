import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO
    // Send POST request to server

    console.log(email, password);
    console.log("User successfully signed in");
    navigate("/stocks");
  };

  // const handleForgetPassword = (e) => {
  //   e.preventDefault();
  //   // TODO
  //   console.log("Forget Password");
  // };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm">
        <form className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-4 text-center">Sign In</h2>
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
          <div className="flex items-center justify-center">
            <button
              className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
              onClick={handleSubmit}
            >
              Sign In
            </button>
            {/* <a href="#" className="text-indigo-500 font-medium"
              // onClick={handleForgetPassword}
            >
              Forgot Password?
            </a> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
