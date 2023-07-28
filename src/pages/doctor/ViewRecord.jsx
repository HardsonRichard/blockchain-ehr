// import React, { useState, useEffect } from "react";
// import { loadBlockchaindata, loadweb3 } from "Web3helpers"
// import { getPatientRecords } from "../../api"; // Import the function to fetch patient records from the backend API

// const ViewPatientRecords = () => {
//   const [patientRecords, setPatientRecords] = useState([]);

//   useEffect(() => {
//     // Fetch patient records when the component mounts
//     fetchPatientRecords();
//   }, []);

//   const fetchPatientRecords = async () => {
//     try {
//       const records = await getPatientRecords(); // Call the backend API function to fetch patient records
//       setPatientRecords(records);
//     } catch (error) {
//       console.error("Error fetching patient records:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Previous Patient Records</h1>
//       {patientRecords.length === 0 ? (
//         <p>No patient records found.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Patient ID</th>
//               <th>Appointment ID</th>
//               <th>Diagnosis</th>
//               <th>Prescription</th>
//               <th>Test Result</th>
//             </tr>
//           </thead>
//           <tbody>
//             {patientRecords.map((record) => (
//               <tr key={record.patientId}>
//                 <td>{record.patientId}</td>
//                 <td>{record.appointmentId}</td>
//                 <td>{record.diagnosis}</td>
//                 <td>{record.prescription}</td>
//                 <td>{record.testResult ? "Found" : "Not Found"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default ViewPatientRecords;

import React from "react";

const ViewPatientRecords = () => {
  const patientRecords = [
    {
      patientId: "P001",
      appointmentId: "A001",
      diagnosis: "Fever",
      prescription: "Paracetamol",
      testResult: true,
    },
    {
      patientId: "P002",
      appointmentId: "A002",
      diagnosis: "Cough",
      prescription: "Cough syrup",
      testResult: false,
    },
    {
      patientId: "P003",
      appointmentId: "A003",
      diagnosis: "Headache",
      prescription: "Ibuprofen",
      testResult: true,
    },
    // Add more patient records as needed
  ];

  return (
    <div className="pl-4">
      <h1 className="text-sm text-blue font-bold mb-4">Previous Patient Records</h1>
      {patientRecords.length === 0 ? (
        <p>No patient records found.</p>
      ) : (
        <table className="w-full  px-4 border border-gray-200">
          <thead className="bg-blue-500">
            <tr>
              <th className="py-3 px-4 text-left text-white">Patient ID</th>
              <th className="py-3 px-4 text-left text-white">Appointment ID</th>
              <th className="py-3 px-4 text-left text-white">Diagnosis</th>
              <th className="py-3 px-4 text-left text-white">Prescription</th>
              <th className="py-3 px-4 text-left text-white">Test Result</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {patientRecords.map((record) => (
              <tr key={record.patientId}>
                <td className="py-3 px-4">{record.patientId}</td>
                <td className="py-3 px-4">{record.appointmentId}</td>
                <td className="py-3 px-4">{record.diagnosis}</td>
                <td className="py-3 px-4">{record.prescription}</td>
                <td className="py-3 px-4">
                  {record.testResult ? "Found" : "Not Found"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewPatientRecords;

