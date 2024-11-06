import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${name}`,
        email: `${email}`,
        password: `${password}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(`data is ${data}`))
      .catch((error) => console.log(`error : ${error}`));

    console.log(
      `Username is ${name}, email is ${email} and password is ${password}`
    );

    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="w-full max-w-xs">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Username</label>
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
