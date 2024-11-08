import React from "react";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showpassword, setshowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        console.log(`login successfully`);
        navigate("/shop");
      } else {
        console.error("login failed");
      }
    } catch (error) {
      console.log(`error :  ${error}`);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="w-full max-w-xs">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="bg-gray-800  rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            />
          </div>
          <div className="mb-6 relative">
            <label className="block text-sm font-bold mb-2">Password</label>
            <input
              type={showpassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            />
            <span
              className="absolute bottom-3 right-3"
              onClick={() => setshowPassword(!showpassword)}
            >
              {showpassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <button
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded"
            onClick={handlelogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
