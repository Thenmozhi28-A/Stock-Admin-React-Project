
// import { NavLink } from "react-router-dom";
// import { FaHome } from 'react-icons/fa';
// import { VscChecklist } from "react-icons/vsc";
// import { FiUserCheck } from "react-icons/fi";
// import { IoNotificationsOutline } from "react-icons/io5";
// import { CiSettings, CiLogout } from "react-icons/ci";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

//   const handleLogout = () => {
//     setShowLogoutConfirm(true);
//   };

//   const confirmLogout = () => {
//     localStorage.removeItem("userFullName");
//     localStorage.removeItem("userEmail");
//     localStorage.removeItem("userPassword");
//     navigate("/");
//     setShowLogoutConfirm(false);
//   };

//   const cancelLogout = () => {
//     setShowLogoutConfirm(false);
//   };

//   return (
//     <div className="w-full md:w-[190px] h-screen bg-white border-r border-gray-200 flex flex-col justify-between p-4">
//       <div className="flex flex-col gap-6">
//         <div className="flex items-center justify-center text-purple-700 font-bold text-lg gap-2">
//           <img
//             src="https://res.cloudinary.com/dul2ze6ok/image/upload/v1751991107/Stocklogo_ilnr77.png"
//             alt="Logo"
//             className="w-20"
//           />
//         </div>
//         <nav className="flex flex-col gap-5 mt-8">
//           <NavLink
//             to="/dashboard"
//             className={({ isActive }) =>
//               `flex items-center gap-3 text-xs px-3 py-3 rounded-md hover:bg-gray-100 transition-colors ${
//                 isActive ? "bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] text-white" : "text-gray-700"
//               }`
//             }
//           >
//             <FaHome size={15} />
//             <span>Dashboard</span>
//           </NavLink>
//           <NavLink
//             to="/manage-stock"
//             className={({ isActive }) =>
//               `flex items-center gap-3 text-xs px-3 py-3 rounded-md hover:bg-gray-100 transition-colors ${
//                 isActive ? "bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] text-white" : "text-gray-700"
//               }`
//             }
//           >
//             <VscChecklist size={15} />
//             <span>Manage Stock</span>
//           </NavLink>
//           <NavLink
//             to="/usermanager"
//             className={({ isActive }) =>
//               `flex items-center gap-3 text-xs px-3 py-3 rounded-md hover:bg-gray-100 transition-colors ${
//                 isActive ? "bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] text-white" : "text-gray-700"
//               }`
//             }
//           >
//             <FiUserCheck size={15} />
//             <span>User Manager</span>
//           </NavLink>
//           <NavLink
//             to="/notification"
//             className={({ isActive }) =>
//               `flex items-center gap-3 text-xs px-3 py-3 rounded-md hover:bg-gray-100 transition-colors ${
//                 isActive ? "bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] text-white" : "text-gray-700"
//               }`
//             }
//           >
//             <IoNotificationsOutline size={15} />
//             <span>Notification</span>
//           </NavLink>
//           <NavLink
//             to="/setting"
//             className={({ isActive }) =>
//               `flex items-center gap-3 text-xs px-3 py-3 rounded-md hover:bg-gray-100 transition-colors ${
//                 isActive ? "bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] text-white" : "text-gray-700"
//               }`
//             }
//           >
//             <CiSettings size={15} />
//             <span>Setting</span>
//           </NavLink>
//         </nav>
//       </div>
//       <div
//         className="flex flex-row items-center gap-3 bg-red-50 px-3 py-2 rounded-md cursor-pointer"
//         onClick={handleLogout}
//       >
//         <CiLogout color="red" />
//         <p className="text-red-600 text-sm">Logout</p>
//       </div>

//       {showLogoutConfirm && (
//         <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
//           <div className="bg-white p-3 md:p-6 rounded-md w-[300px] md:w-[400px]">
//             <p className="text-center text-[14px] md:text-[16px] mb-4">
//               Are you sure you want to logout?
//             </p>
//             <div className="flex justify-center gap-4">
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-900"
//                 onClick={confirmLogout}
//               >
//                 Yes
//               </button>
//               <button
//                 className="bg-gray-300 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-900 hover:text-white"
//                 onClick={cancelLogout}
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

// export default Sidebar;


import { NavLink } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import { VscChecklist } from "react-icons/vsc";
import { FiUserCheck } from "react-icons/fi";
import { IoNotificationsOutline, IoClose } from "react-icons/io5";
import { CiSettings, CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ closeSidebar }) => {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("userFullName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    navigate("/");
    setShowLogoutConfirm(false);
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <div className="w-[220px] h-screen bg-white border-r border-gray-200 flex flex-col justify-between p-4 relative">
      {/* Mobile Close Btn */}
      <div className="absolute top-3 right-3 md:hidden">
        <button onClick={closeSidebar}>
          <IoClose size={24} className="text-gray-600" />
        </button>
      </div>

      <div className="flex flex-col gap-6 mt-6 md:mt-0">
        <div className="flex items-center justify-center text-purple-700 font-bold text-lg gap-2">
          <img
            src="https://res.cloudinary.com/dul2ze6ok/image/upload/v1751991107/Stocklogo_ilnr77.png"
            alt="Logo"
            className="w-20"
          />
        </div>
        <nav className="flex flex-col gap-5 mt-8">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 text-xs px-3 py-3 rounded-md hover:bg-gray-100 transition-colors ${
                isActive ? "bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] text-white" : "text-gray-700"
              }`
            }
            onClick={closeSidebar}
          >
            <FaHome size={15} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/manage-stock"
            className={({ isActive }) =>
              `flex items-center gap-3 text-xs px-3 py-3 rounded-md hover:bg-gray-100 transition-colors ${
                isActive ? "bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] text-white" : "text-gray-700"
              }`
            }
            onClick={closeSidebar}
          >
            <VscChecklist size={15} />
            <span>Manage Stock</span>
          </NavLink>
          <NavLink
            to="/usermanager"
            className={({ isActive }) =>
              `flex items-center gap-3 text-xs px-3 py-3 rounded-md hover:bg-gray-100 transition-colors ${
                isActive ? "bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] text-white" : "text-gray-700"
              }`
            }
            onClick={closeSidebar}
          >
            <FiUserCheck size={15} />
            <span>User Manager</span>
          </NavLink>
          <NavLink
            to="/notification"
            className={({ isActive }) =>
              `flex items-center gap-3 text-xs px-3 py-3 rounded-md hover:bg-gray-100 transition-colors ${
                isActive ? "bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] text-white" : "text-gray-700"
              }`
            }
            onClick={closeSidebar}
          >
            <IoNotificationsOutline size={15} />
            <span>Notification</span>
          </NavLink>
          <NavLink
            to="/setting"
            className={({ isActive }) =>
              `flex items-center gap-3 text-xs px-3 py-3 rounded-md hover:bg-gray-100 transition-colors ${
                isActive ? "bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] text-white" : "text-gray-700"
              }`
            }
            onClick={closeSidebar}
          >
            <CiSettings size={15} />
            <span>Setting</span>
          </NavLink>
        </nav>
      </div>
      <div
        className="flex flex-row items-center gap-3 bg-red-50 px-3 py-2 rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        <CiLogout color="red" />
        <p className="text-red-600 text-sm">Logout</p>
      </div>

      {showLogoutConfirm && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
          <div className="bg-white p-3 md:p-6 rounded-md w-[300px] md:w-[400px]">
            <p className="text-center text-[14px] md:text-[16px] mb-4">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-900"
                onClick={confirmLogout}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-900 hover:text-white"
                onClick={cancelLogout}
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

export default Sidebar;
