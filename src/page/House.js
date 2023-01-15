import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ApiService from "../service/api.service";

export default function House() {
  const [home, setHome] = useState([]);

  const DisplayHome = async () => {
    await ApiService.displayHouse()
      .then((res) => {
        setHome(res.data.data);
      })
      .catch((error) => {
        console.log("🚀 ~ file: Home.js:12 ~ DisplayHome ~ error", error);
      });
  };

  useEffect(() => {
    DisplayHome();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 ">
        <div className="w-full text-center font-proxima text-4xl py-8">
          Your facade options
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 py-8 bg-[#]">
          {home &&
            home.map((house, index) => (
              <div
                key={index}
                className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500 rounded-xl"
              >
                <Link
                  to={{
                    pathname: `/house/${house.id}`,
                    data: house.id,
                  }}
                >
                  <img
                    src={house.attributes.imageurl}
                    alt="Product"
                    className="h-80 object-cover rounded-t-xl"
                  />
                </Link>
                <div className="px-4 py-3">
                  <p className="text-lg font-bold text-gray-600 truncate block capitalize font-georgia_italic">
                    {house.attributes.name}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
