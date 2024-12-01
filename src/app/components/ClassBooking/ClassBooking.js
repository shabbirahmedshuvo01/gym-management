"use client"

import React, { useState } from "react";

export default function ClassBooking() {
  const [formData, setFormData] = useState({
    classId: "",
    traineeId: "",
    date: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/book-class", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setResponseMessage(`Success: ${data.message}`);
        setFormData({ classId: "", traineeId: "", date: "" }); // Reset form
      } else {
        setResponseMessage(`Error: ${data.message || "Something went wrong"}`);
      }
    } catch (error) {
      setResponseMessage("Error: Unable to book the class. Please try again.");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Book a Class</h2>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Class ID</label>
          <input
            type="text"
            name="classId"
            value={formData.classId}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter Class ID"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Trainee ID</label>
          <input
            type="text"
            name="traineeId"
            value={formData.traineeId}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter Trainee ID"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Date</label>
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Book Class
        </button>
      </form>
      {responseMessage && (
        <div
          className={`mt-4 px-4 py-2 rounded-md ${
            responseMessage.startsWith("Success")
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {responseMessage}
        </div>
      )}
    </div>
  );
}
