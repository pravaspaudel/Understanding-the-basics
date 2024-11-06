// src/components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold mb-8">Welcome!</h1>
        <Link to="/login">
          <button className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="px-4 py-2 bg-green-500 rounded hover:bg-green-700 ml-4">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
