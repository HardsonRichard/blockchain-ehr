import React from "react";
import { HiClipboardList, HiUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const OrderedTest = () => {
  const orderedTests = [
    {
      id: "1",
      patientName: "John Doe",
      testType: "Blood Test",
      orderedBy: "Dr. Smith",
      status: "Pending",
    },
    {
      id: "2",
      patientName: "Jane Smith",
      testType: "Urinalysis",
      orderedBy: "Dr. Johnson",
      status: "Completed",
    },
    {
      id: "3",
      patientName: "Michael Brown",
      testType: "X-ray",
      orderedBy: "Dr. Davis",
      status: "In Progress",
    },
    {
      id: "4",
      patientName: "Emily Johnson",
      testType: "MRI Scan",
      orderedBy: "Dr. Wilson",
      status: "Pending",
    },
    {
      id: "5",
      patientName: "Sarah Anderson",
      testType: "Ultrasound",
      orderedBy: "Dr. Thompson",
      status: "Completed",
    },
    {
      id: "6",
      patientName: "David Davis",
      testType: "EKG",
      orderedBy: "Dr. Martinez",
      status: "In Progress",
    },
    {
      id: "7",
      patientName: "Olivia Robinson",
      testType: "CT Scan",
      orderedBy: "Dr. Taylor",
      status: "Completed",
    },
    {
      id: "8",
      patientName: "Jacob Miller",
      testType: "Blood Test",
      orderedBy: "Dr. Anderson",
      status: "Pending",
    },
    {
      id: "9",
      patientName: "Emma Thomas",
      testType: "Urinalysis",
      orderedBy: "Dr. Clark",
      status: "In Progress",
    },
    {
      id: "10",
      patientName: "William Turner",
      testType: "X-ray",
      orderedBy: "Dr. Garcia",
      status: "Pending",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold mb-6">Ordered Tests</h1>
      <table className="w-full bg-white border border-gray-300">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6">Patient Name</th>
            <th className="py-3 px-6">Test Type</th>
            <th className="py-3 px-6">Ordered By</th>
            <th className="py-3 px-6">Status</th>
            <th className="py-3 px-6">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-900">
          {orderedTests.map((test) => (
            <tr key={test.id}>
              <td className="py-4 px-6">{test.id}</td>
              <td className="py-4 px-6">{test.patientName}</td>
              <td className="py-4 px-6">{test.testType}</td>
              <td className="py-4 px-6">{test.orderedBy}</td>
              <td className="py-4 px-6">{test.status}</td>
              <td className="py-4 px-6">
                <button className="text-blue-600 hover:text-blue-700">
                  View
                </button>
                <button className="text-green-600 hover:text-green-700">
                  Consult
                </button>
                <button className="text-red-600 hover:text-red-700">
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link
        to="/profile"
        className="mt-6 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700"
      >
        <HiUserCircle className="text-xl mr-2" />
        Profile
      </Link>
    </div>
  );
};

export default OrderedTest;
