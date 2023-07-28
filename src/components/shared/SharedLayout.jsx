import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ReceptionistHeader from "./ReceptionistHeader";

function SharedLayout() {
  return (
    <div className="flex flex-col  md:flex-row min-h-screen py-1.5 md:py-0 sm:mx-auto w-full bg-white">
      <Sidebar />
      <div className="flex flex-col w-full">
        <ReceptionistHeader />
        <div className="overflow-y-auto">{<Outlet />}</div>
      </div>
    </div>
  );
}

export default SharedLayout;
