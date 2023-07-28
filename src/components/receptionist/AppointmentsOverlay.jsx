// AppointmentOverlay.js
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { addAppointment } from "../../Web3patient"; // Assuming you've exported addAppointment function

const AppointmentOverlay = ({ onClose }) => {
  const [doctorID, setDoctorID] = useState("");
  const [patientID, setPatientID] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addAppointment(doctorID, patientID);
      console.log("Appointment added successfully");
      onClose(); // Close the overlay after adding the appointment
    } catch (error) {
      console.log("Error adding appointment:", error);
    }
  };

  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-neutral-900 bg-opacity-75 z-[1000]" />
      <div className="absolute bg-white rounded-md shadow-lg z-[1000] w-1/2 h-1/2">
        <div className="bg-white p-8 rounded-lg shadow-md">

          <div className="p-4">
          <h2 className="text-md text-blue-500 font-semibold mb-4 text-center">Add Appointment</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="doctorID" className="block font-medium mb-1">
                  Doctor ID
                </label>
                <input
                  type="text"
                  id="doctorID"
                  value={doctorID}
                  onChange={(e) => setDoctorID(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="patientID" className="block font-medium mb-1">
                  Patient ID
                </label>
                <input
                  type="text"
                  id="patientID"
                  value={patientID}
                  onChange={(e) => setPatientID(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  required
                />
              </div>
              <div className="flex justify-end">
              <button
                  type="button"
                  onClick={onClose}
                  className="ml-4 px-4 py-2 bg-gray-400 text-blue-500 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Add 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default AppointmentOverlay;
