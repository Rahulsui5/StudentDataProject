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
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-50 p-6">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-indigo-800 drop-shadow-md">
        Schools List
      </h1>
      {schools.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No schools available.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {schools.map((school) => (
            <div
              key={school.id}
              className="bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 text-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col items-center p-5"
            >
              <div className="w-full h-48 overflow-hidden rounded-2xl mb-4">
                <img
                  src={`/schoolImages/${school.image}`}
                  alt={school.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300 rounded-2xl border-2 border-white"
                />
              </div>
              <h2 className="text-2xl font-bold mb-1 text-center drop-shadow-sm">
                {school.name}
              </h2>
              <p className="text-white/90 text-sm text-center mb-1">
                {school.address}
              </p>
              <p className="text-white/80 text-sm text-center">{school.city}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowSchools;
