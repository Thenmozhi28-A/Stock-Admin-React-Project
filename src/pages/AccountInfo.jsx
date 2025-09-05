
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../components/Button";
import { FaEdit } from "react-icons/fa";

const accountInfoSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .required("Phone Number is required")
    .min(10, "Number must be 10 digits"),
});

const AccountInfo = () => {
  const storedFullName = localStorage.getItem("userFullName");
  const storedEmail = localStorage.getItem("userEmail");
  const storedPhoneNumber = localStorage.getItem("userPhoneNumber");

  const [isEditing, setIsEditing] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(accountInfoSchema),
    defaultValues: {
      fullName: storedFullName || "",
      email: storedEmail || "",
      phone: storedPhoneNumber || "",
    },
  });

  const onSubmit = (data) => {
    localStorage.setItem("userFullName", data.fullName);
    localStorage.setItem("userEmail", data.email);
    localStorage.setItem("userPhoneNumber", data.phone);

    window.dispatchEvent(new Event("storage"));

    alert("Profile updated successfully ✅");
    setIsEditing(false);
  };

  const handleCancel = () => {
    reset({
      fullName: storedFullName || "",
      email: storedEmail || "",
      phone: storedPhoneNumber || "",
    });
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center">
        <p className="text-sm font-medium">Account Information</p>
        {!isEditing && (
          <FaEdit
            className="cursor-pointer text-gray-600 hover:text-purple-500"
            onClick={() => setIsEditing(true)}
          />
        )}
      </div>

      <div className="mt-3 flex flex-col md:flex-row gap-5 w-full">
        <div className="flex flex-col w-full">
          <label className="text-xs">Full Name</label>
          <input
            placeholder="Enter your name"
            className="p-3 mt-2 border border-gray-300 rounded-sm focus:bg-white focus:border-gray-300 text-xs"
            {...register("fullName")}
            disabled={!isEditing}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-3 flex flex-col md:flex-row gap-5 w-full">
        <div className="flex flex-col w-full">
          <label className="text-xs">Email</label>
          <input
            placeholder="Enter your email"
            className="p-3 mt-2 border border-gray-300 rounded-sm focus:bg-white focus:border-gray-300 text-xs"
            {...register("email")}
            disabled={!isEditing}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col w-full">
          <label className="text-xs">Phone Number</label>
          <input
            placeholder="Enter your phone number"
            className="p-3 mt-2 border border-gray-300 rounded-sm focus:bg-white focus:border-gray-300 text-xs"
            {...register("phone")}
            disabled={!isEditing}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      {isEditing && (
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={handleCancel}
            className="text-gray-950 bg-gray-300 text-xs font-medium rounded-sm p-3 cursor-pointer w-20"
          >
            Cancel
          </button>
          <Button type="submit" className="px-4 py-2 rounded-sm text-sm">
            Update
          </Button>
        </div>
      )}
    </form>
  );
};

export default AccountInfo;
