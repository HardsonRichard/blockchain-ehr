import React from "react";
import { Doctors } from "../../lib/consts/Doctors";
import { useParams } from "react-router-dom";
import WaitingAppointments from "../../components/receptionist/WaitingAppointments";
import { appointments } from "../../lib/consts/appointments";

function DoctorAppointmentPage() {
  const { doctorsId } = useParams();
  const doctor = Doctors.find((doctor) => doctor.key === doctorsId);
  const id = doctor.id;
  const appointment = appointments.find(
    (appointment) =>
      appointment.status === "waiting" && appointment.doctorId === id
  );

  return (
    <div className="flex flex-col px-3 mt-2">
      <div className="flex flex-col justify-start items-center">
        <p className="block text-md font-semibold text-neutral-400">
          Doctor: {doctor.name}
        </p>
        <p className="block text-md font-semibold text-neutral-400">
          Room: {doctor.room}
        </p>
      </div>
      <div className="mt-6 mb-4">
        {appointment && (
          <strong className="text-blue-800 text-md ">
            Waiting Appointments
          </strong>
        )}
        <div className="flex flex-row gap-4">
          <WaitingAppointments doctorId={doctor.id} />
        </div>
      </div>
    </div>
  );
}

export default DoctorAppointmentPage;
