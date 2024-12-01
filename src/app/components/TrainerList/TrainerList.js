"use client";

import React, { useState, useEffect } from "react";

export default function TrainerList() {
  const [trainers, setTrainers] = useState([]);
  const [newTrainer, setNewTrainer] = useState({ name: "", specialty: "", experience: "" });
  const [editTrainer, setEditTrainer] = useState(null);

  // Fetch trainers from API
  useEffect(() => {
    const fetchTrainers = async () => {
      const response = await fetch("https://gym-backend-6sb6.onrender.comapi/trainer");
      const data = await response.json();
      setTrainers(data);
    };
    fetchTrainers();
  }, []);

  // Add new trainer
  const handleAddTrainer = async () => {
    try {
      const response = await fetch("https://gym-backend-6sb6.onrender.comapi/admin/add-trainer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newTrainer.name,
          specialty: newTrainer.specialty,
          experience: parseInt(newTrainer.experience, 10),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add trainer");
      }

      const data = await response.json();
      setTrainers([...trainers, { ...data, specialty: newTrainer.specialty }]);
      setNewTrainer({ name: "", specialty: "", experience: "" }); // Reset the form
    } catch (error) {
      console.error(error);
      alert("Error adding trainer. Please try again.");
    }
  };

  // Update trainer
  const handleUpdateTrainer = async () => {
    const response = await fetch(`https://gym-backend-6sb6.onrender.comapi/trainer/${editTrainer._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editTrainer),
    });

    const data = await response.json();
    setTrainers(
      trainers.map((trainer) => (trainer._id === editTrainer._id ? data : trainer))
    );
    setEditTrainer(null);
  };

  // Delete trainer
  const handleDeleteTrainer = async (id) => {
    await fetch(`https://gym-backend-6sb6.onrender.comapi/trainer/${id}`, {
      method: "DELETE",
    });
    setTrainers(trainers.filter((trainer) => trainer._id !== id));
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">Manage Trainers</h2>

      {/* Add Trainer Form */}
      <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Add Trainer</h3>
        <div className="flex flex-col space-y-4 mb-4">
          <input
            type="text"
            placeholder="Name"
            value={newTrainer.name}
            onChange={(e) => setNewTrainer({ ...newTrainer, name: e.target.value })}
            className="px-4 py-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Specialty"
            value={newTrainer.specialty}
            onChange={(e) => setNewTrainer({ ...newTrainer, specialty: e.target.value })}
            className="px-4 py-2 border rounded-md"
          />
          <input
            type="number"
            placeholder="Experience (in years)"
            value={newTrainer.experience}
            onChange={(e) => setNewTrainer({ ...newTrainer, experience: e.target.value })}
            className="px-4 py-2 border rounded-md"
          />
        </div>
        <button
          onClick={handleAddTrainer}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Add Trainer
        </button>
      </div>

      {/* Trainer List */}
      <ul className="space-y-4">
        {trainers.map((trainer) => (
          <li
            key={trainer._id}
            className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg hover:bg-gray-50 transition duration-200"
          >
            {editTrainer && editTrainer._id === trainer._id ? (
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={editTrainer.name}
                  onChange={(e) => setEditTrainer({ ...editTrainer, name: e.target.value })}
                  className="px-4 py-2 border rounded-md w-full"
                />
                <input
                  type="text"
                  value={editTrainer.specialty}
                  onChange={(e) => setEditTrainer({ ...editTrainer, specialty: e.target.value })}
                  className="px-4 py-2 border rounded-md w-full"
                />
                <button
                  onClick={handleUpdateTrainer}
                  className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300"
                >
                  Update
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <span className="text-lg font-medium">
                  {trainer.name} - {trainer.specialty} ({trainer.experience} years)
                </span>
                <div className="space-x-4">
                  <button
                    onClick={() => setEditTrainer(trainer)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTrainer(trainer._id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
