// import { Outlet } from "react-router-dom";
// import Header from "./Header";
// import Sidebar from "./Sidebar";

// const Layout = () => {
//   return (
//     <div className="flex h-screen bg-[#f9f9f9]">
//       <div className="hidden md:block">
//         <Sidebar />
//       </div>

//       <div className="flex-1 flex flex-col h-screen">
//         <div className="hidden md:block">
//           <Header />
//         </div>

//         <div className="p-4 h-full w-full overflow-y-auto">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;


import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#f9f9f9]">
      {/* Sidebar for desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Sidebar for mobile (overlay) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Sidebar panel */}
          <div className="w-[220px] bg-white h-full shadow-lg">
            <Sidebar />
          </div>
          {/* Overlay background */}
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen">
        {/* Mobile Header */}
        <div className="md:hidden h-[60px] bg-white  flex justify-between items-center px-4">
          <img
            src="https://res.cloudinary.com/dul2ze6ok/image/upload/v1751991107/Stocklogo_ilnr77.png"
            alt="Logo"
            className="w-16"
          />
          <IoMenu
            size={28}
            className="text-gray-700 cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          />
        </div>

        {/* Desktop Header */}
        <div className="hidden md:block">
          <Header />
        </div>

        {/* Page Content */}
        <div className="mt-4 md:mt-0 p-4 h-full w-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
