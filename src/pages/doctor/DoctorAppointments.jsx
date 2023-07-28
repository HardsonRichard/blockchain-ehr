import React from "react";

const Appointments = () => {
  // Hardcoded appointments data (replace with actual data from backend)
  const appointments = [

      {
        id: "1",
        patientName: "John Doe",
        appointmentDate: "2023-06-25",
        appointmentTime: "10:00 AM",
        reason: "Check-up",
      },
      {
        id: "2",
        patientName: "Jane Smith",
        appointmentDate: "2023-06-26",
        appointmentTime: "02:30 PM",
        reason: "Follow-up",
      },
      {
        id: "3",
        patientName: "Michael Johnson",
        appointmentDate: "2023-06-27",
        appointmentTime: "11:45 AM",
        reason: "Lab Results",
      },
      {
        id: "4",
        patientName: "Sarah Williams",
        appointmentDate: "2023-06-28",
        appointmentTime: "03:15 PM",
        reason: "Medication Refill",
      },
      {
        id: "5",
        patientName: "Robert Thompson",
        appointmentDate: "2023-06-29",
        appointmentTime: "09:30 AM",
        reason: "Annual Physical",
      },
      {
        id: "6",
        patientName: "Emily Davis",
        appointmentDate: "2023-06-30",
        appointmentTime: "01:00 PM",
        reason: "Consultation",
      },
      {
        id: "7",
        patientName: "Daniel Brown",
        appointmentDate: "2023-07-01",
        appointmentTime: "04:45 PM",
        reason: "Follow-up",
      },
      {
        id: "8",
        patientName: "Olivia Wilson",
        appointmentDate: "2023-07-02",
        appointmentTime: "10:30 AM",
        reason: "Check-up",
      },
      {
        id: "9",
        patientName: "Matthew Lee",
        appointmentDate: "2023-07-03",
        appointmentTime: "02:15 PM",
        reason: "Lab Results",
      },
      {
        id: "10",
        patientName: "Ava Clark",
        appointmentDate: "2023-07-04",
        appointmentTime: "11:00 AM",
        reason: "Consultation",
      },
      // Add more appointments as needed
    ];
    


  const handleViewAppointment = (appointmentId) => {
    // Handle logic for viewing appointment details
    console.log(`View appointment with ID: ${appointmentId}`);
  };

  const handleConsultAppointment = (appointmentId) => {
    // Handle logic for consulting with the patient
    console.log(`Consult appointment with ID: ${appointmentId}`);
  };

  const handleCancelAppointment = (appointmentId) => {
    // Handle logic for canceling the appointment
    console.log(`Cancel appointment with ID: ${appointmentId}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Doctor Appointments</h1>
      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            <th className="bg-blue-600 text-white py-2 px-4 border-b">Patient Name</th>
            <th className="bg-blue-600 text-white py-2 px-4 border-b">Appointment Date</th>
            <th className="bg-blue-600 text-white py-2 px-4 border-b">Appointment Time</th>
            <th className="bg-blue-600 text-white py-2 px-4 border-b">Reason</th>
            <th className="bg-blue-600 text-white py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="py-2 px-4 border-b">{appointment.patientName}</td>
              <td className="py-2 px-4 border-b">{appointment.appointmentDate}</td>
              <td className="py-2 px-4 border-b">{appointment.appointmentTime}</td>
              <td className="py-2 px-4 border-b">{appointment.reason}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-blue-500 text-white py-1 px-2 rounded-md mr-2"
                  onClick={() => handleViewAppointment(appointment.id)}
                >
                  View
                </button>
                <button
                  className="bg-green-500 text-white py-1 px-2 rounded-md mr-2"
                  onClick={() => handleConsultAppointment(appointment.id)}
                >
                  Consult
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded-md"
                  onClick={() => handleCancelAppointment(appointment.id)}
                >
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

export default Appointments;

