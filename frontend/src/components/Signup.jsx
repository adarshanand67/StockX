import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
   const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password };
    const body = {
      name: user.name,
      email: user.email,
      password: user.password,
    }
    console.log(body);

    // Send POST request to /signup
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.status === 200) {
        navigate("/signin");
         toast({
           title: "Account created.",
           description: "We've created your account for you. Redirecting to sign in page...",
           status: "success",
           duration: 9000,
           isClosable: true,
         });
      } else {
        toast({
          title: "Error signing up.",
          description: "We've encountered an error signing you up. Please try again.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        const error = new Error(res.error);
        throw error;
      }
    }).catch((err) => {
      console.error(err);
      alert("Error signing up please try again");
    })
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
