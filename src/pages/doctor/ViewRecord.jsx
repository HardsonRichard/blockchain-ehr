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

// import React from "react";

// const ViewPatientRecords = () => {
//   const patientRecords = [
//     {
//       patientId: "P001",
//       appointmentId: "A001",
//       diagnosis: "Fever",
//       prescription: "Paracetamol",
//       testResult: true,
//     },
//     {
//       patientId: "P002",
//       appointmentId: "A002",
//       diagnosis: "Cough",
//       prescription: "Cough syrup",
//       testResult: false,
//     },
//     {
//       patientId: "P003",
//       appointmentId: "A003",
//       diagnosis: "Headache",
//       prescription: "Ibuprofen",
//       testResult: true,
//     },
//     // Add more patient records as needed
//   ];

//   return (
//     <div className="pl-4">
//       <h1 className="text-sm text-blue font-bold mb-4">Previous Patient Records</h1>
//       {patientRecords.length === 0 ? (
//         <p>No patient records found.</p>
//       ) : (
//         <table className="w-full  px-4 border border-gray-200">
//           <thead className="bg-blue-500">
//             <tr>
//               <th className="py-3 px-4 text-left text-white">Patient ID</th>
//               <th className="py-3 px-4 text-left text-white">Appointment ID</th>
//               <th className="py-3 px-4 text-left text-white">Diagnosis</th>
//               <th className="py-3 px-4 text-left text-white">Prescription</th>
//               <th className="py-3 px-4 text-left text-white">Test Result</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {patientRecords.map((record) => (
//               <tr key={record.patientId}>
//                 <td className="py-3 px-4">{record.patientId}</td>
//                 <td className="py-3 px-4">{record.appointmentId}</td>
//                 <td className="py-3 px-4">{record.diagnosis}</td>
//                 <td className="py-3 px-4">{record.prescription}</td>
//                 <td className="py-3 px-4">
//                   {record.testResult ? "Found" : "Not Found"}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default ViewPatientRecords;

// import React, { useState } from "react";
// import PatientRecord from "../../components/doctor/PatientRecord";
// import { HiClipboardCopy, HiOutlineSearch } from "react-icons/hi";

// const ViewRecord = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div className="flex flex-col sticky top-16  z-[80] py-1">
//       <div className="flex justify-center py-8 text-blue-600">
//         ADD PATIENT RECORD MODULE
//       </div>
//       <div className="flex flex-col justify-center items-center min-h-full w-full px-4 py-2">
//       <div className=" relative mt-1.5">
//           <HiOutlineSearch
//           fontSize={20}
//           className="absolute text-gray-400 left-3 top-1/2 -translate-y-1/2"
//         />
//             <input
//               type="text"
//               name="patient-id"
//               id="patient-id"
//               placeholder="Enter patient ID"
//               autoComplete="patient-id"
//               required
//               className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset px-10  ring-gray-300 placeholder:px-2 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//       <button
//           onClick={(e) => setVisible(true)}
//           className="mt-4 flex flex-col text-center  items-center bg-transparent text-sm px-12 text-gray-500"
//         >
//           <HiClipboardCopy fontSize={120} />
//           ADD PATIENT RECORD
//         </button>
//             <StoredPatientRecord isOpen={visible} visible={visible} setVisible={setVisible} />
//       </div>
//     </div>
//   );
// };

// export default ViewRecord;

import React, { useState } from 'react';
import { BsSearch, BsX } from 'react-icons/bs';
import classNames from 'classnames';
import { getPatientRecord } from '../../Web3patient';

const ViewPatientRecord = () => {
  const [appointmentID, setAppointmentID] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);
  const [appointmentInfo, setAppointmentInfo] = useState({});

  const handleSearch = async () => {
    try {
      const appointmentData = await getPatientRecord(parseInt(appointmentID));
      setAppointmentInfo(appointmentData);
      setShowOverlay(true);
    } catch (error) {
      console.error('Error fetching appointment data:', error);
    }
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className="mt-3">
      <div className="flex flex-col justify-center items-center min-h-full w-full px-4 py-2 gap-4">
        <input
          type="text"
          placeholder="Enter Appointment ID"
          value={appointmentID}
          onChange={(e) => setAppointmentID(e.target.value)}
          className="mr-2 px-2 py-1 border rounded-lg"
        />
        <button
          onClick={handleSearch}
          className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        >
          <BsSearch className="text-white mr-1" />
          <span className="text-white">Search</span>
        </button>
      </div>

      {showOverlay && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleCloseOverlay}
        >
          <div className="bg-white p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-3">Appointment Information</h4>
            <div className="mb-2">
              <strong>Patient ID:</strong> {appointmentInfo.patientID}
            </div>
            <div className="mb-2">
              <strong>Appointment ID:</strong> {appointmentInfo.appointmentID}
            </div>
            <div className="mb-2">
              <strong>Symptoms:</strong> {appointmentInfo.symptoms}
            </div>
            <div className="mb-2">
              <strong>Diagnosis:</strong> {appointmentInfo.diagnosis}
            </div>
            <div className="mb-2">
              <strong>Test:</strong> {appointmentInfo.test ? 'Yes' : 'No'}
            </div>
            <div>
              <strong>Prescription:</strong> {appointmentInfo.prescription}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewPatientRecord;
