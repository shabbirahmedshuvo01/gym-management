"use client";

import React, { useState } from "react";
import TrainerList from "../components/TrainerList/TrainerList";
import ScheduleForm from "../components/ScheduleForm/ScheduleForm";
import ClassBooking from "../components/ClassBooking/ClassBooking";
import BookingList from "../components/BookingList/BookingList";


export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("trainers");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-xl">
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setActiveTab("trainers")}
            className={`px-6 py-2 rounded-t-lg font-semibold ${
              activeTab === "trainers"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            Manage Trainers
          </button>
          <button
            onClick={() => setActiveTab("schedule")}
            className={`px-6 py-2 rounded-t-lg font-semibold ${
              activeTab === "schedule"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            Class Scheduling
          </button>
          <button
            onClick={() => setActiveTab("booking")}
            className={`px-6 py-2 rounded-t-lg font-semibold ${
              activeTab === "booking"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            Book Class
          </button>
          <button
            onClick={() => setActiveTab("bookingsList")}
            className={`px-6 py-2 rounded-t-lg font-semibold ${
              activeTab === "bookingsList"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            Bookings List
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {activeTab === "trainers" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Manage Trainers</h2>
              <TrainerList />
            </div>
          )}
          {activeTab === "schedule" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Class Scheduling</h2>
              <ScheduleForm />
            </div>
          )}
          {activeTab === "booking" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Book a Class</h2>
              <ClassBooking />
            </div>
          )}
          {activeTab === "bookingsList" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">All Bookings</h2>
              <BookingList /> {/* Render BookingList here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
