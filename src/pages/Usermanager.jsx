// import React, { useState, useEffect } from "react";
// import WelcomeHeader from "../components/WelcomeHeader";
// import Addstockuser from "./Addstockuser";

// const Usermanager = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
//   const [users, setUsers] = useState(() => {
//     const savedUsers = localStorage.getItem("users");
//     return savedUsers ? JSON.parse(savedUsers) : [];
//   });
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [userToDelete, setUserToDelete] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     localStorage.setItem("users", JSON.stringify(users));
//   }, [users]);

//   const addUser = (user) => {
//     if (selectedUser) {
//       setUsers(users.map((u) => (u.email === selectedUser.email ? user : u)));
//       setSelectedUser(null);
//     } else {
//       setUsers([...users, user]);
//     }
//     setShowModal(false);
//   };

//   const confirmDelete = () => {
//     setUsers(users.filter((u) => u.email !== userToDelete.email));
//     setShowDeleteConfirm(false);
//     setUserToDelete(null);
//   };

//   const cancelDelete = () => {
//     setShowDeleteConfirm(false);
//     setUserToDelete(null);
//   };

//   const handleEdit = (user) => {
//     setSelectedUser(user);
//     setShowModal(true);
//   };

//   const handleDelete = (user) => {
//     setUserToDelete(user);
//     setShowDeleteConfirm(true);
//   };

//   const filteredUsers = users.filter(
//     (user) =>
//       user.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.street.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.zipcode.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <WelcomeHeader
//         title="User Manager"
//         subtitle="Manage User Accounts and Permissions"
//         buttonText="+ Add User"
//         buttonClassName="w-30 text-[12px] font-semibold rounded-[8px] py-[10px] px-0"
//         onButtonClick={() => {
//           setSelectedUser(null);
//           setShowModal(true);
//         }}
//       />
//       {showModal && (
//         <Addstockuser
//           onClose={() => setShowModal(false)}
//           onAddUser={addUser}
//           selectedUser={selectedUser}
//         />
//       )}
//       <div className="bg-white rounded-[12px] p-6 mb-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
//           <h3 className="text-[20px] md:text-xs lg:text-[18px] font-semibold">
//             All Users
//           </h3>
//           <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
//             <input
//               placeholder="Search Users..."
//               className="border border-gray-100 bg-gray-50 rounded-md p-2 text-base md:text-sm w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-300"
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full mt-6 rounded-[8px]">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">
//                   Full Name
//                 </th>
//                 <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">
//                   Email
//                 </th>
//                 <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">
//                   City
//                 </th>
//                 <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">
//                   Street
//                 </th>
//                 <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">
//                   Zip Code
//                 </th>
//                 <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredUsers.length > 0 ? (
//                 filteredUsers.map((user, index) => (
//                   <tr key={index}>
//                     <td className="text-left px-4 py-5 text-[12px] text-gray-700">
//                       {user.fullname}
//                     </td>
//                     <td className="text-left px-4 py-5 text-[12px] text-gray-700">
//                       {user.email}
//                     </td>
//                     <td className="text-left px-4 py-5 text-[12px] text-gray-700">
//                       {user.city}
//                     </td>
//                     <td className="text-left px-4 py-5 text-[12px] text-gray-700">
//                       {user.street}
//                     </td>
//                     <td className="text-left px-4 py-5 text-[12px] text-gray-700">
//                       {user.zipcode}
//                     </td>
//                     <td className="px-4 py-4 text-[12px] text-gray-700">
//                       <button
//                         className="text-blue-500 hover:text-blue-700 cursor-pointer"
//                         onClick={() => handleEdit(user)}
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
//                           />
//                         </svg>
//                       </button>
//                       <button
//                         className="text-red-500 hover:text-red-700 ml-2 cursor-pointer"
//                         onClick={() => handleDelete(user)}
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//                           />
//                         </svg>
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan="6"
//                     className="text-center text-[12px] px-4 py-6 text-gray-500"
//                   >
//                     No users found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {showDeleteConfirm && (
//         <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
//           <div className="bg-white p-3 md:p-6 rounded-md w-[300px] md:w-[400px]">
//             <p className="text-center text-[14px] md:text-[16px] mb-4">
//               Are you sure you want to delete this user?
//             </p>
//             <div className="flex justify-center gap-4">
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-900"
//                 onClick={confirmDelete}
//               >
//                 Yes
//               </button>
//               <button
//                 className="bg-gray-300 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-900 hover:text-white"
//                 onClick={cancelDelete}
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Usermanager;


import React, { useState, useEffect } from "react";
import WelcomeHeader from "../components/WelcomeHeader";
import Addstockuser from "./Addstockuser";

const Usermanager = () => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  const [selectedUser, setSelectedUser] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    if (selectedUser) {
      setUsers(users.map((u) => (u.email === selectedUser.email ? user : u)));
      setSelectedUser(null);
    } else {
      setUsers([...users, user]);
    }
    setShowModal(false);
  };

  const confirmDelete = () => {
    setUsers(users.filter((u) => u.email !== userToDelete.email));
    setShowDeleteConfirm(false);
    setUserToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setUserToDelete(null);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleDelete = (user) => {
    setUserToDelete(user);
    setShowDeleteConfirm(true);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.street.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.zipcode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <WelcomeHeader
        title="User Manager"
        subtitle="Manage User Accounts and Permissions"
        buttonText="+ Add User"
        buttonClassName="w-30 text-[12px] font-semibold rounded-[8px] py-[10px] px-0 mt-5 md:mt-0"
        onButtonClick={() => {
          setSelectedUser(null);
          setShowModal(true);
        }}
      />
      {showModal && (
        <Addstockuser
          onClose={() => setShowModal(false)}
          onAddUser={addUser}
          selectedUser={selectedUser}
        />
      )}
      <div className="bg-white rounded-[12px] p-6 mb-6">
        {/* Header + Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
          <h3 className="text-[20px] md:text-xs lg:text-[18px] font-semibold">
            All Users
          </h3>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <input
              placeholder="Search Users..."
              className="border border-gray-100 bg-gray-50 rounded-md p-2 text-base md:text-sm w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* ✅ Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full mt-6 rounded-[8px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">
                  Name
                </th>
                <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">
                  Email
                </th>
                <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">
                  City
                </th>
                <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">
                  Street
                </th>
                <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">
                  Zip Code
                </th>
                <th className="text-left px-4 py-5 text-[12px] font-medium text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <tr key={index}>
                    <td className="text-left px-4 py-5 text-[12px] text-gray-700">
                      {user.fullname}
                    </td>
                    <td className="text-left px-4 py-5 text-[12px] text-gray-700">
                      {user.email}
                    </td>
                    <td className="text-left px-4 py-5 text-[12px] text-gray-700">
                      {user.city}
                    </td>
                    <td className="text-left px-4 py-5 text-[12px] text-gray-700">
                      {user.street}
                    </td>
                    <td className="text-left px-4 py-5 text-[12px] text-gray-700">
                      {user.zipcode}
                    </td>
                    <td className="px-4 py-4 text-[12px] text-gray-700 flex gap-2">
                      {/* ✏️ Edit */}
                      <button
                        className="text-blue-500 hover:text-blue-700 cursor-pointer"
                        onClick={() => handleEdit(user)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      {/* 🗑️ Delete */}
                      <button
                        className="text-red-500 hover:text-red-700 cursor-pointer"
                        onClick={() => handleDelete(user)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center text-[12px] px-4 py-6 text-gray-500"
                  >
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ✅ Mobile Cards */}
        <div className="block md:hidden space-y-4 mt-6">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <div
                key={index}
                className="p-4 border border-gray-300 rounded-lg shadow-sm text-sm space-y-1"
              >
                <p><span className="text-sm">Full Name :</span> {user.fullname}</p>
                <p><span className="text-sm">Email :</span> {user.email}</p>
                <p><span className="text-sm">City :</span> {user.city}</p>
                <p><span className="text-sm">Street :</span> {user.street}</p>
                <p><span className="text-sm">Zip Code :</span> {user.zipcode}</p>
                <div className="flex gap-3 pt-2">
                  {/* ✏️ Edit */}
                  <button
                    className="text-blue-500 hover:text-blue-700 cursor-pointer"
                    onClick={() => handleEdit(user)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  {/* 🗑️ Delete */}
                  <button
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                    onClick={() => handleDelete(user)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 text-sm">No users found</p>
          )}
        </div>
      </div>

      {/* Delete Confirm Modal */}
      {showDeleteConfirm && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
          <div className="bg-white p-3 md:p-6 rounded-md w-[300px] md:w-[400px]">
            <p className="text-center text-[14px] md:text-[16px] mb-4">
              Are you sure you want to delete this user?
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-900"
                onClick={confirmDelete}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-900 hover:text-white"
                onClick={cancelDelete}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Usermanager;
