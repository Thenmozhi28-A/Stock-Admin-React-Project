import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const NotifiCard = ({ title, subtitle, message, borderColor, onDelete }) => {
  const colorMap = {
    blue: "border-l-blue-500",
    green: "border-l-green-500",
    red: "border-l-red-500",
  };
  const borderColorClass = colorMap[borderColor];

  return (
    <div
      className={`flex flex-row items-center justify-between p-4 rounded-lg w-full bg-white mt-5 ${borderColorClass} border-l-4`}
    >
      <div className="flex flex-col">
        <p className="text-base font-medium">
          {title} <span className="text-xs font-light text-gray-500">{subtitle}</span>
        </p>
        <p className="text-xs mt-1 text-gray-600">{message}</p>
      </div>
      <div className="flex flex-row gap-3">
        <FaRegCheckCircle className="text-blue-500 cursor-pointer" />
        <RiDeleteBinLine
          className="text-red-500 cursor-pointer"
          onClick={onDelete}
        />
      </div>
    </div>
  );
};

export default NotifiCard;
