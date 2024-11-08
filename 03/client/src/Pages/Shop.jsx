import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Shop = () => {
  const [shopData, setShopData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchShopData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/shop", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setShopData(data);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching shop data:", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchShopData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
        Welcome to the Shop
      </h1>

      <div className="flex justify-center mb-8">
        <Link to="/sell">
          {" "}
          <button className="bg-green-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-600 transition duration-300">
            Sell
          </button>
        </Link>
      </div>

      {/* <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Products</h2> */}
      {/* Example of displaying product data (if available)
        {shopData ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {shopData.map((product, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                  View Product
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-red-600">No products available</p>
        )}
      </div> */}
    </div>
  );
};

export default Shop;
