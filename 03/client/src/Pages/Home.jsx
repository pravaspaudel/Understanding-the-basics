import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid place-content-center h-screen">
      <h1 className="text-white font-bold text-5xl mb-10">Welcome</h1>

      <div className="flex gap-10 justify-center">
        <Link to="/login">
          <button className="bg-green-400 p-5 rounded-md">Login</button>
        </Link>

        <Link to="/signup">
          <button className="bg-blue-400 p-5 rounded-md">Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
