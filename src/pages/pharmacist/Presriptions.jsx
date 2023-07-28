import React, { useState } from "react";

const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([
    { id: "1", patientName: "John Doe", medication: "Aspirin", dosage: "10mg", quantity: "30 tablets" },
    { id: "2", patientName: "Jane Smith", medication: "Amoxicillin", dosage: "500mg", quantity: "20 capsules" },
    // Add more prescriptions here
  ]);

  return (
    <div>
      <h2 className="text-2xl font-medium">Ordered Prescriptions</h2>
      <table className="mt-4 w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-blue-500 text-white">Prescription ID</th>
            <th className="px-4 py-2 bg-blue-500 text-white">Patient Name</th>
            <th className="px-4 py-2 bg-blue-500 text-white">Medication</th>
            <th className="px-4 py-2 bg-blue-500 text-white">Dosage</th>
            <th className="px-4 py-2 bg-blue-500 text-white">Quantity</th>
            <th className="px-4 py-2 bg-blue-500 text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.map((prescription) => (
            <tr key={prescription.id}>
              <td className="border px-4 py-2">{prescription.id}</td>
              <td className="border px-4 py-2">{prescription.patientName}</td>
              <td className="border px-4 py-2">{prescription.medication}</td>
              <td className="border px-4 py-2">{prescription.dosage}</td>
              <td className="border px-4 py-2">{prescription.quantity}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md mr-2">
                  View 
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-md mr-2">
                  Dispense
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-md">
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Prescriptions;
