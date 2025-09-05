import React from "react";
const Input = React.forwardRef(
  ({ label, type = "text", placeholder, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col text-left w-full">
        {" "}
        <label className="text-[13px] font-medium text-[#333]">{label}</label>{" "}
        <input
          type={type}
          placeholder={placeholder}
          className={`mt-2 px-3 py-2.5 border rounded-lg border-gray-200 text-[14px] outline-none ${className}`}
          ref={ref}
          {...props}
        />{" "}
      </div>
    );
  }
);
export default Input;
