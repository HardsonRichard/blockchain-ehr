import React, { useState } from "react";

const AddMedication = () => {
  const [patientId, setPatientId] = useState("");
  const [medication, setMedication] = useState("");
  const [dosage, setDosage] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform medication addition logic here

    // Reset form fields
    setPatientId("");
    setMedication("");
    setDosage("");
    setQuantity("");
  };

  return (
    <div className="flex flex-col justify-centre items-centre p-4">
      <h2 className="text-md text-blue-500 font-medium">ADD MEDICATION</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex flex-col">
          <label htmlFor="patientId" className="text-lg font-medium">
            Patient ID
          </label>
          <input
            type="text"
            id="patientId"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="medication" className="text-lg font-medium">
            Medication
          </label>
          <input
            type="text"
            id="medication"
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="dosage" className="text-lg font-medium">
            Dosage
          </label>
          <input
            type="text"
            id="dosage"
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="quantity" className="text-lg font-medium">
            Quantity
          </label>
          <input
            type="text"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md mt-6"
        >
          Add Medication
        </button>
      </form>
    </div>
  );
};

export default AddMedication;
