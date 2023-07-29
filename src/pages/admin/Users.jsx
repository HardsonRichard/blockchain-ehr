import React, { useState, useEffect } from "react";
import { init, getTotalUsers } from "../../Web3client";

const Users = () => {
  const [totalUsers, setTotalUsers] = useState(0);

  const handleSubmit = async (e) => {
    try {
      const usersCount = await getTotalUsers();
      setTotalUsers(usersCount);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    init();
    handleSubmit();
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen p-8 flex flex-col justify-center items-center">
      <h2 className="text-lg font-semibold mb-4">Total Users: {totalUsers}</h2>
 
    </div>
  );
};

export default Users;
