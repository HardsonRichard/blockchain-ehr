import React, { useState } from "react";
import DoctorAppointmentCard from "../../components/receptionist/DoctorAppointmentCard";
import { Link } from "react-router-dom";

const DOCTORS_AVAILABLE = [
  {
    path: "doctor1",
    key: "doctor1",
    name: "John Doe",
    room: "1",
  },
  {
    path: "doctor2",
    key: "doctor2",
    name: "Hermione Garry",
    room: "2",
  },
  {
    path: "doctor3",
    key: "doctor3",
    name: "Hardson Ally",
    room: "3",
  },
  {
    path: "doctor4",
    key: "doctor4",
    name: "Meshack Mtweve",
    room: "4",
  },
  {
    path: "doctor5",
    key: "doctor5",
    name: "Shadrack Hoseah",
    room: "5",
  },
];

function Appointments() {
  const [selectedDoctorPath, setSelectedDoctorPath] = useState(null);

  const handleDoctorClick = (path) => {
    setSelectedDoctorPath(path);
  };
  return (
    <div className="flex flex-col mt-6 px-4">
      <h2 className="text-sm font-semi-bold text-blue-950">
        DOCTORS AVAILABLE
      </h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 2xl:grid-cols-6">
        {DOCTORS_AVAILABLE.map((item) => (
          <DoctorAvailableLink
            key={item.key}
            item={item}
            selected={item.path === selectedDoctorPath}
            onClick={() => handleDoctorClick(item.path)}
          />
        ))}
      </div>
      <div>
        {selectedDoctorPath && (
          <div className="text-sm text-gray-500 mt-2">
            Selected Doctor Path: {selectedDoctorPath}
          </div>
        )}
      </div>
    </div>
  );
}

function DoctorAvailableLink({ item }) {
  const [showPath, setShowPath] = useState(false);

  const togglePathVisibility = () => {
    setShowPath(!showPath);
  };
  return (
    <>
      <Link to={item.path} onClick={togglePathVisibility}>
        <DoctorAppointmentCard item={item} />
      </Link>
      {showPath && <div className="w-full h-full">{item.path}</div>}
    </>
  );
}

export default Appointments;
