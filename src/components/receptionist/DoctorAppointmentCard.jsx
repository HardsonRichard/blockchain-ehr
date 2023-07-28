import React from "react";

const imgUrl = "https://source.unsplash.com/80x80?face";

function DoctorAppointmentCard({ item }) {
  return (
    <div className="flex flex-col bg-gray-300 rounded-lg px-1 py-1 w-100 h-100 justify-center items-center my-2 gap-4 shadow-lg shadow-gray-300">
      <img
        src={imgUrl}
        alt="img"
        className="flex flex-col justify-center items-center rounded-full bg-sky-500 bg-cover  my-2 bg-no-repeat bg-center"
      />
      <div className="border-t flex flex-col justify-center items-center border-gray-500 my-2">
        <p className="text-neutral-900 text-sm font-semibold">
          Doctor name: {item.name}
        </p>
        <p className="text-neutral-900 text-sm font-semibold">
          Room Number: {item.room}
        </p>
      </div>
    </div>
  );
}

export default DoctorAppointmentCard;
