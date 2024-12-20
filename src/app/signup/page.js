"use client";

import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false); // To show loading status
  const [message, setMessage] = useState(""); // To display success or error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      setIsLoading(true);
      setMessage("");

      // Make POST request to the backend API
      const response = await fetch("https://gym-backend-6sb6.onrender.comapi/trainee/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Signup successful! You can now log in.");
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        setMessage(data.message || "Signup failed! Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-500 to-teal-700">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Create an Account
        </h1>
        <p className="text-sm text-center text-gray-500">
          Sign up to get started
        </p>
        {message && (
          <div
            className={`text-center text-sm ${
              message.includes("successful")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-400"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-400"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-400"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-400"
            />
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring focus:ring-green-400 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-green-600 hover:underline"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
