import React from "react";
import { Outlet } from "react-router-dom";

function SharedAppointmentsLayout() {
  return (
    <div className="flex flex-col mt-4 px-4">
      <div className="flex justify-center text-blue-600">
        APPOINTMENTS MODULE
      </div>
      <div className="flex flex-col w-full border border-slate-50 border-opacity-80 shadow-md rounded-sm h-full bg-slate-50 px-4 mt-3">
        <Outlet />
      </div>
    </div>
  );
}

export default SharedAppointmentsLayout;
