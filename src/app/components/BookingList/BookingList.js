"use client"

import React, { useEffect, useState } from "react";

export default function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/bookings/all");
        if (!response.ok) {
          throw new Error("Failed to fetch bookings.");
        }
        const data = await response.json();
        setBookings(data); // Assuming the response is an array of bookings
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <div className="text-center mt-4">Loading bookings...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 mt-4">Error: {error}</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">All Bookings</h2>
      {bookings.length === 0 ? (
        <div className="text-center">No bookings found.</div>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Booking ID</th>
              <th className="border border-gray-300 px-4 py-2">Class ID</th>
              <th className="border border-gray-300 px-4 py-2">Trainee ID</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  {booking._id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {booking.classId}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {booking.traineeId}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(booking.date).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
