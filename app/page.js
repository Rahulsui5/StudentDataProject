"use client";
import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 p-6 gap-6">
      <h1 className="text-4xl font-extrabold text-indigo-800 mb-8">School Dashboard</h1>
      <div className="flex flex-col sm:flex-row gap-6">
        <Link href="/addSchool">
          <button className="px-6 py-3 bg-indigo-500 text-white rounded-xl shadow-lg hover:bg-indigo-600 transition">
            Add School
          </button>
        </Link>
        <Link href="/showSchools">
          <button className="px-6 py-3 bg-pink-500 text-white rounded-xl shadow-lg hover:bg-pink-600 transition">
            Show Schools
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
