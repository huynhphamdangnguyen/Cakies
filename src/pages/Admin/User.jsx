import React, { useState, useEffect } from "react";

const User = () => {
  const [users, setUsers] = useState([]);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border-b">{user.id}</td>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">
                {/* Add actions buttons here */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
