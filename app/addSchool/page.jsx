"use client";
import React from "react";
import { useForm } from "react-hook-form";

const AddSchool = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("contact", data.contact);
    formData.append("email_id", data.email_id);
    formData.append("image", data.image[0]);

    await fetch("/api/schools", {
      method: "POST",
      body: formData,
    });

    alert("School added successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 p-8 rounded-3xl shadow-xl text-white">
        <h1 className="text-4xl font-extrabold mb-8 text-center drop-shadow-md">
          Add School
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
          {/* School Name */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="School Name"
              {...register("name", { required: true })}
              className="p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white bg-white/20 placeholder-white transition"
            />
            {errors.name && (
              <span className="text-yellow-200 text-sm mt-1">Name is required</span>
            )}
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Address"
              {...register("address", { required: true })}
              className="p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white bg-white/20 placeholder-white transition"
            />
            {errors.address && (
              <span className="text-yellow-200 text-sm mt-1">Address is required</span>
            )}
          </div>

          {/* City & State */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <input
                type="text"
                placeholder="City"
                {...register("city", { required: true })}
                className="p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white bg-white/20 placeholder-white transition"
              />
              {errors.city && (
                <span className="text-yellow-200 text-sm mt-1">City is required</span>
              )}
            </div>
            <div className="flex-1 flex flex-col">
              <input
                type="text"
                placeholder="State"
                {...register("state", { required: true })}
                className="p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white bg-white/20 placeholder-white transition"
              />
              {errors.state && (
                <span className="text-yellow-200 text-sm mt-1">State is required</span>
              )}
            </div>
          </div>

          {/* Contact & Email */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <input
                type="number"
                placeholder="Contact Number"
                {...register("contact", { required: true, minLength: 10, maxLength: 10 })}
                className="p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white bg-white/20 placeholder-white transition"
              />
              {errors.contact && (
                <span className="text-yellow-200 text-sm mt-1">
                  Valid contact number required
                </span>
              )}
            </div>
            <div className="flex-1 flex flex-col">
              <input
                type="email"
                placeholder="Email ID"
                {...register("email_id", { required: true, pattern: /^\S+@\S+$/i })}
                className="p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white bg-white/20 placeholder-white transition"
              />
              {errors.email_id && (
                <span className="text-yellow-200 text-sm mt-1">Valid email required</span>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="flex flex-col">
            <input
              type="file"
              accept="image/*"
              {...register("image", { required: true })}
              className="p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-white bg-white/20 text-white transition"
            />
            {errors.image && (
              <span className="text-yellow-200 text-sm mt-1">Image is required</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-bold bg-white text-indigo-600 hover:bg-white/90 hover:text-indigo-700 transition"
          >
            Add School
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSchool;
