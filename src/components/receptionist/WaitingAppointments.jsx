import React from "react";
import { appointments } from "../../lib/consts/appointments";

function WaitingAppointments({ doctorId }) {
  function handleClick() {}
  const appointment = appointments.find(
    (appointment) =>
      appointment.status === "waiting" && appointment.doctorId === doctorId
  );
  if (!appointment) return (
    <div className="flex justify-centeritems-center"><h1 className="text-blue-900 text-lg font-semibold">No waiting appointments</h1></div>
  );

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full table-auto rounded-lg border px-5 pt-6 pb-2.5 shadow-default  sm:px-7.5 xl:pb-1">
        <thead>
          <tr className="border-b border-[#eee] bg-blue-800 text-left">
            <th className="py-4 px-4 text-black fonti-md tracking-wide text-left">
              Appointment Id
            </th>
            <th className="py-4 px-4 text-black fonti-md tracking-wide text-left">
              Patient Id
            </th>
            <th className="py-4 px-4 text-black fonti-md tracking-wide text-left">
              Time initiated
            </th>
            <th className="py-4 px-4 font-medium text-black">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) =>
            appointment.status === "waiting" &&
            appointment.doctorId === doctorId ? (
              <tr key={appointment.key} className="bg-white">
                <td className="border-b border-[#eee] py-5 px-4">
                  <p className="text-black text-sm">
                    {" "}
                    {appointment.appointmentId}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4">
                  <p className="text-black text-sm">{appointment.patientId}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4">
                  <p className="text-black text-sm">{15.4}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4">
                  <div className="flex items-center justify-center">
                    <button
                      onClick={handleClick}
                      className="flex flex-col items-center hover:text-primary p-4 bg-slate-500  shadow-md hover:shadow-lg hover:bg-slate-400 hover:text-black rounded-2xl"
                    >
                      <p className="text-blue-50 text-sm">CANCEL</p>
                    </button>
                  </div>
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
}

export default WaitingAppointments;
