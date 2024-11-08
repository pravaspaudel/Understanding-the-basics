import React from "react";
import { useState } from "react";

const Sell = () => {
  const [productname, setProductname] = useState("");

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="w-full max-w-xs">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form className="bg-gray-800 rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Product name</label>
            <input
              type="text"
              placeholder="Name of your product"
              value={productname}
              onChange={(e) => setProductname(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Price</label>
            <input
              type="number"
              placeholder="Price"
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Choose Product photo
            </label>
            <input
              type="file"
              placeholder="Email"
              className="w-full px-3 py-2 bg-gray-700 text-white rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sell;
