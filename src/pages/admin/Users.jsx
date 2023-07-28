import React, { useState } from "react";

const Users = () => {
  // Sample user data
  const users = [
    { id: 1, name: "Jane Smith", role: "Doctor" },
    { id: 2, name: "Mike Johnson", role: "Lab Technician" },
    { id: 3, name: "Emily Davis", role: "Pharmacist" },
    { id: 4, name: "Sarah Wilson", role: "Lab Technician" },
    { id: 5, name: "David Thompson", role: "Doctor" },
    { id: 6, name: "Jennifer Lee", role: "Doctor" },
    { id: 7, name: "Michael Brown", role: "Pharmacist" },
    { id: 8, name: "William Mushi", role: "Receptionist" },
    { id: 9, name: "Emily Wilson", role: "Lab Technician" },
    { id: 10, name: "William Johnson", role: "Doctor" },
    { id: 11, name: "Samira Adams", role: "Receptionist" },
  ];

  // Grouping users by roles
  const groupedUsers = users.reduce((groups, user) => {
    const { role } = user;
    if (!groups[role]) {
      groups[role] = [];
    }
    groups[role].push(user);
    return groups;
  }, {});

  // State for selected user
  const [selectedUser, setSelectedUser] = useState(null);

  // Delete user function
  const deleteUser = (userId) => {
    // Implement user deletion logic here
    console.log("Deleting user with ID:", userId);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-medium mb-4">Users</h2>
      <div className="flex flex-wrap gap-4">
        {Object.keys(groupedUsers).map((role, index) => (
          <div
            key={role}
            className={`bg-${index === 0 ? 'green' : index === 1 ? 'yellow' : index === 2 ? 'purple' : index === 3 ? 'red' : ''}-500 rounded-md text-white flex flex-col justify-center py-4 px-6`}
            style={{ width: "200px", height: "120px" }}
          >
            <h3 className="text-xl font-medium mb-2">{role}</h3>
            <p className="text-lg font-semibold">
              {groupedUsers[role].length} Users
            </p>
          </div>
        ))}
        {/* Button card for Receptionist */}
        {groupedUsers["Receptionist"] && (
          <div
            className="bg-indigo-500 rounded-md text-white flex flex-col justify-center py-4 px-6"
            style={{ width: "200px", height: "120px" }}
          >
            <h3 className="text-xl font-medium mb-2">Receptionist</h3>
            <p className="text-lg font-semibold">
              {groupedUsers["Receptionist"].length} Users
            </p>
          </div>
        )}
      </div>

      <table className="mt-8 w-full border border-gray-300 bg-white">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th className="py-2 px-4">User ID</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Role</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4">{user.id}</td>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.role}</td>
              <td className="py-2 px-4">
                <button
                  className={`bg-red-500 text-white font-medium px-2 py-1 rounded-md`}
                  onClick={() => setSelectedUser(user)}
                >
                  {/* {selectedUser === user ? "Delete" : "Select"} */}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <div className="mt-4">
          <p>
            {selectedUser ? "Deleting" : "Selected"} user: {selectedUser.name} (ID: {selectedUser.id})
          </p>
          {/* Add delete confirmation and delete logic here */}
        </div>
      )}
    </div>
  );
};

export default Users;
