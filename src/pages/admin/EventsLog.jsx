import React from "react";

const events = [
  {
    timestamp: "2023-06-20 10:30 AM",
    type: "PatientAdded",
    performedBy: "Jane Johnson",
  },
  {
    timestamp: "2023-06-20 11:00 AM",
    type: "PatientDemographicsAdded",
    performedBy: "Bob Brown",
  },
  {
    timestamp: "2023-06-20 12:15 PM",
    type: "PatientInsuranceAdded",
    performedBy: "Frank Franklin",
  },
  {
    timestamp: "2023-06-20 2:00 PM",
    type: "PatientRecordAdded",
    performedBy: "Alice Anderson",
  },
  {
    timestamp: "2023-06-20 3:30 PM",
    type: "RecordReportAdded",
    performedBy: "David Davis",
  },
  {
    timestamp: "2023-06-20 4:45 PM",
    type: "AppointmentScheduled",
    performedBy: "Grace Gray",
  },
];

function EventsLog() {
  return (
    <div className="mx-auto w-full p-4">
      <table className="w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300 bg-blue-700 text-white text-left text-lg">Timestamp</th>
            <th className="py-2 px-4 border-b border-gray-300 bg-blue-700 text-white text-left text-lg">Action</th>
            <th className="py-2 px-4 border-b border-gray-300 bg-blue-700 text-white text-left text-lg">Performed By</th>
            <th className="py-2 px-4 border-b border-gray-300 bg-blue-700 text-white text-left text-lg">Details</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b border-gray-300 text-lg">{event.timestamp}</td>
              <td className="py-2 px-4 border-b border-gray-300 text-lg">{event.type}</td>
              <td className="py-2 px-4 border-b border-gray-300 text-lg">{event.performedBy}</td>
              <td className="py-2 px-4 border-b border-gray-300 text-lg text-left">
                <a href={`/events/${index}`} className="underline">View Details</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventsLog;



