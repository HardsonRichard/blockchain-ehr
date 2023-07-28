import React from "react";
import { loadBlockchainData, loadWeb3 } from "../../Web3helpers";

const SystemUsers = () => {
  const userCounts = [
    // { role: "Users", count: 100, color: "bg-blue-500" },
    { role: "Receptionists", count: 20, color: "bg-green-500" },
    { role: "Doctors", count: 30, color: "bg-yellow-500" },
    { role: "Laboratory Technicians", count: 15, color: "bg-red-500" },
    { role: "Pharmacists", count: 10, color: "bg-purple-500" },
  ];

  return (
    <div className="flex justify-start items-center">
      {userCounts.map((userCount, index) => (
        <div
          key={index}
          className={`w-54 p-2 mx-3 rounded-lg shadow-lg text-center ${userCount.color}`}
        >
          <h3 className="text-white text-sm font-semibold">
            {userCount.role}
          </h3>
          <p className="text-white text-2xl font-bold">{userCount.count}</p>
        </div>
      ))}
    </div>
  );
};

export default SystemUsers;
