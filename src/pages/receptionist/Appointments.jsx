// App.js
import React, { useState } from "react";
import AppointmentOverlay from "../../components/receptionist/AppointmentsOverlay";
import { HiBriefcase } from "react-icons/hi";

const Appointments = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleAddAppointment = () => {
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <button
        onClick={handleAddAppointment}
        className="px-4 py-2 text-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
      >
        <HiBriefcase size={120} fill="gray" className="text-4xl mb-4" />
        <span className="flex items-center text-base">ADD APPOINTMENT</span>
      </button>

      {isOverlayOpen && <AppointmentOverlay onClose={handleCloseOverlay} />}
    </div>
  );
};

export default Appointments;
