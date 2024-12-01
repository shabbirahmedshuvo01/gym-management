"use client";


import React, { useState, useEffect } from "react";

export default function ScheduleForm() {
  const [schedules, setSchedules] = useState([]);
  const [newSchedule, setNewSchedule] = useState({
    date: "",
    startTime: "",
    duration: 2,
  });

  // Fetch existing class schedules
  useEffect(() => {
    const fetchSchedules = async () => {
      const response = await fetch('https://gym-backend-6sb6.onrender.comapi/schedules');
      const data = await response.json();
      setSchedules(data);
    };
    fetchSchedules();
  }, []);

  // Validate the form before submission
  const validateForm = () => {
    const schedulesOnDay = schedules.filter(
      (schedule) => schedule.date === newSchedule.date
    );
    
    // Check if max 5 schedules exist for the day
    if (schedulesOnDay.length >= 5) {
      alert("Cannot schedule more than 5 classes per day.");
      return false;
    }

    // Check if class duration exceeds 2 hours
    if (newSchedule.duration > 2) {
      alert("Class duration cannot exceed 2 hours.");
      return false;
    }

    return true;
  };

  // Create new schedule
  const handleCreateSchedule = async () => {
    if (validateForm()) {
      const response = await fetch('https://gym-backend-6sb6.onrender.comapi/schedules', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSchedule),
      });
      const data = await response.json();
      setSchedules([...schedules, data]);
      setNewSchedule({ date: "", startTime: "", duration: 2 }); // Reset form
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Create Class Schedule</h3>
      <div>
        <input
          type="date"
          value={newSchedule.date}
          onChange={(e) => setNewSchedule({ ...newSchedule, date: e.target.value })}
        />
        <input
          type="time"
          value={newSchedule.startTime}
          onChange={(e) => setNewSchedule({ ...newSchedule, startTime: e.target.value })}
        />
        <select
          value={newSchedule.duration}
          onChange={(e) => setNewSchedule({ ...newSchedule, duration: parseInt(e.target.value) })}
        >
          <option value="1">1 Hour</option>
          <option value="2">2 Hours</option>
        </select>
        <button onClick={handleCreateSchedule}>Create Schedule</button>
      </div>

      {/* Display existing schedules */}
      <div>
        <h4>Existing Schedules</h4>
        <ul>
          {schedules.map((schedule) => (
            <li key={schedule._id}>
              {schedule.date} {schedule.startTime} - {schedule.duration} hours
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
