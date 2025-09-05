
import React, { useEffect, useState } from "react";

const Header = () => {
  const [userFullName, setUserFullName] = useState(""); 

  useEffect(() => {
    const storedFullName = localStorage.getItem("userFullName");
    if (storedFullName) {
      setUserFullName(storedFullName);
    }

    const handleStorageChange = () => {
      const updatedFullName = localStorage.getItem("userFullName");
      if (updatedFullName) {
        setUserFullName(updatedFullName);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="h-[70px] w-full bg-white border-b border-gray-200 flex justify-between items-center px-4 lg:px-8 sticky top-0 z-10">
      <div className="text-[16px] lg:text-[14px] font-semibold text-gray-800">
        Stock Market Admin Panel
      </div>
      <div className="flex items-center gap-2.5">
        <img
          src="https://i.pravatar.cc/40?img=3"
          alt="Admin"
          className="w-8 rounded-full"
        />
        <div className="flex flex-col items-start gap-1">
          <span className="text-xs lg:text-sm font-medium text-gray-900">
            {userFullName}
          </span>
          <span className="text-xs font-medium text-gray-400">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
