import React from "react";
import { FcDepartment } from "react-icons/fc";
import {
  DASHBOARD_DOCTOR_SIDEBAR_LINKS,
  DASHBOARD_ADMIN_SIDEBAR_LINKS,
  DASHBOARD_LABTECH_SIDEBAR_LINKS,
  DASHBOARD_PHARMACIST_SIDEBAR_LINKS,
  DASHBOARD_RECEPTIONIST_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../../lib/consts/SidebarNavigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiDatabase, HiOutlineLogout } from "react-icons/hi";

const linkClasses =
  "flex flex-row gap-2 items-center font-light px-3 py-2 hover:bg-blue-700 hover:no-underline active:bg-blue-600 rounded-sm text-base ";

function Sidebar() {
  return (
    <div className="hidden sm:block md:flex md:flex-col justify-between  h-screen top-0 sticky w-60 md:w-1/3.5 lg:w-1/4.5 bg-blue-600 md:overflow-hidden">
      <div>
        <div className="flex flex-row items-center gap-2 px-1 py-3">
          <HiDatabase size={48} fill="white"/>
          <span className="text-white font-semi-bold text-2xl">BPRMS</span>
        </div>
        <div className="flex py-8 flex-col px-2 gap-0.5">
          {DASHBOARD_ADMIN_SIDEBAR_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} />
          ))}
        </div>
      </div>
      <div className="flex flex-2 flex-col py-2 gap-0.5 pt-2 border-t border-blue-200 px-2">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        <div
          className={classNames("text-blue-800 cursor-pointer", {
            linkClasses,
          })}
        >
          <div className="flex flex-row items-center gap-2 px-1 py-3">
            <span className="text-xl">
              <HiOutlineLogout />
            </span>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? "bg-blue-500 text-white" : "text-blue-200",
        {
          linkClasses,
        }
      )}
    >
      <div className="flex flex-row items-center gap-2 px-1 py-3">
        <span className="text-xl">{item.icon}</span>
        {item.label}
      </div>
    </Link>
  );
}

export default Sidebar;
