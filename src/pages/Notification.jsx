
import React, { useState } from "react";
import WelcomeHeader from "../components/WelcomeHeader";
import { GrAdd } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import NotifiCard from "../components/NotifiCard";
import Notifiform from "../pages/Notifiform";

const Notification = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Info",
      subtitle: "(unread)",
      message: "Stock market will be closed on Friday due to holiday.",
      borderColor: "blue",
    },
    {
      id: 2,
      title: "Success",
      subtitle: "(read)",
      message: "Your Portfolio was updated successfully",
      borderColor: "green",
    },
    {
      id: 3,
      title: "Error",
      subtitle: "(unread)",
      message: "Failed to fetch latest stock prices",
      borderColor: "red",
    },
  ]);

  const [showConfirm, setShowConfirm] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isClearAll, setIsClearAll] = useState(false);

  const handleDelete = (id) => {
    setSelectedId(id);
    setIsClearAll(false);
    setShowConfirm(true);
  };

  const handleClearAll = () => {
    setIsClearAll(true);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    if (isClearAll) {
      setNotifications([]);
    } else {
      setNotifications(notifications.filter((item) => item.id !== selectedId));
    }
    setShowConfirm(false);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
  };

  const handleAddNotification = () => {
    setShowForm(true);
  };

  const addNotification = (newNotification) => {
    setNotifications([...notifications, newNotification]);
    setShowForm(false);
  };

  return (
    <div>
      <WelcomeHeader
        title="Manage Notifications"
        subtitle="View and Manage all System Notifications. You Can Add New, Delete, or Mark as Read/Unread"
      />
      <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-0 items-center mb-10 md:mb-0">
        <p className="text-xl font-medium">Notifications List</p>
        <div className="flex flex-row gap-3 mt-3 md:mt-0">
          <div
            className="flex flex-row gap-1 items-center bg-red-200 p-3 rounded-sm text-red-900 cursor-pointer"
            onClick={handleClearAll}
          >
            <RiDeleteBinLine style={{ width: "12px" }} />
            <button className="text-xs">Clear All</button>
          </div>
          <div
            className="flex flex-row gap-1 items-center bg-gradient-to-r from-[#4a00e0] to-[#8e2de2] p-3 text-white rounded-sm cursor-pointer"
            onClick={handleAddNotification}
          >
            <GrAdd style={{ width: "12px" }} />
            <button className="text-xs cursor-pointer">Add Notification</button>
          </div>
        </div>
      </div>
      <div>
        {notifications.map((notification) => (
          <NotifiCard
            key={notification.id}
            {...notification}
            onDelete={() => handleDelete(notification.id)}
          />
        ))}
      </div>

      {showForm && (
        <Notifiform
          onClose={() => setShowForm(false)}
          onSave={addNotification}
        />
      )}

      {showConfirm && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
          <div className="bg-white p-3 md:p-6 rounded-md w-[300px] md:w-[400px]">
            <p className="text-center text-[14px] md:text-[16px] mb-4">
              {isClearAll
                ? "Are you sure you want to clear all notifications?"
                : "Are you sure you want to delete this notification?"}
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

export default Notification;
