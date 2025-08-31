"use client";
import React, { useEffect, useState } from "react";

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch("/api/schools")
      .then((res) => res.json())
      .then((data) => setSchools(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-purple-50 p-6">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
        Schools List
      </h1>
      {schools.length === 0 ? (
        <p className="text-center text-gray-500">No schools available.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {schools.map((school) => (
            <div
              key={school.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col items-center p-4"
            >
              <div className="w-full h-48 overflow-hidden rounded-2xl mb-4">
                <img
                  src={`/schoolImages/${school.image}`}
                  alt={school.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-1 text-center">
                {school.name}
              </h2>
              <p className="text-gray-600 text-sm text-center mb-1">
                {school.address}
              </p>
              <p className="text-gray-500 text-sm text-center">{school.city}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ShowSchools;