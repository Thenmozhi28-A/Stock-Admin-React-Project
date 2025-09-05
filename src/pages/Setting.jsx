import React from "react";
import WelcomeHeader from "../components/WelcomeHeader";
import { Outlet, NavLink } from "react-router-dom";

const Setting = () => {
  return (
    <div>
      <WelcomeHeader
        title="Settings"
        subtitle="Manage your application settings effectively."
      />
      <div>
        <div className="flex flex-row gap-5 text-sm cursor-pointer border-b border-gray-200">
          <NavLink
            to="account-info"
            end
            className={({ isActive }) =>
              `pb-2 transition-colors ${
                isActive || window.location.pathname === "/setting"
                  ? "border-b-2 border-purple-500 text-purple-500 font-medium"
                  : "text-gray-600 hover:text-purple-500"
              }`
            }
          >
            Account Info
          </NavLink>

          <NavLink
            to="change-password"
            className={({ isActive }) =>
              `pb-2 transition-colors ${
                isActive
                  ? "border-b-2 border-purple-500 text-purple-500 font-medium"
                  : "text-gray-600 hover:text-purple-500"
              }`
            }
          >
            Change Password
          </NavLink>
        </div>

        <div className="bg-white mt-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Setting;
