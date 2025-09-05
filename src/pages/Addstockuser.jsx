import React, { useEffect } from "react";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const userSchema = yup.object().shape({
  fullname: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is Required"),
  city: yup.string().required("City is required"),
  street: yup.string().required("Street is required"),
  zipcode: yup.string().required("Zip Code is required"),
});

const Addstockuser = ({ onClose, onAddUser, selectedUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  useEffect(() => {
    if (selectedUser) {
      setValue("fullname", selectedUser.fullname);
      setValue("email", selectedUser.email);
      setValue("city", selectedUser.city);
      setValue("street", selectedUser.street);
      setValue("zipcode", selectedUser.zipcode);
    } else {
      reset();
    }
  }, [selectedUser, setValue, reset]);

   const onSubmit = (data) => {
    onAddUser(data);
    reset();
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] flex items-center justify-center z-50">
      <div className="bg-white p-3 md:p-6 rounded-md w-[300px] md:w-[400px]">
        <div className="mb-1">
          <h2 className="text-[18px] font-semibold">
            {selectedUser ? "Edit User" : "Add New User"}
          </h2>
          <p className="text-xs mb-4 font-medium text-gray-500">
            {selectedUser ? "Edit User Details" : "Add a New User to Your System"}
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 md:gap-3 mt-4"
        >
          <div className="mb-1 text-[12px] font-medium text-[#333]">
            <label className="mb-1 block text-[12px] font-medium text-[#333]">
              Full Name
            </label>
            <input
              placeholder="Enter Full Name"
              className="w-full border rounded-md px-4 py-2.5 mt-1 focus:outline-none border-gray-200"
              type="text"
              {...register("fullname")}
            />
            {errors.fullname && (
              <p className="text-red-500 text-xs mt-1">
                {errors.fullname.message}
              </p>
            )}
          </div>
          <div className="mb-1 text-[12px] font-medium text-[#333]">
            <label className="mb-1 block text-[12px] font-medium text-[#333]">
              Email
            </label>
            <input
              placeholder="Enter Email"
              className="w-full border rounded-md px-4 py-2.5 mt-1 focus:outline-none border-gray-200"
              type="text"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-1 text-[12px] font-medium text-[#333]">
            <label className="mb-1 block text-[12px] font-medium text-[#333]">
              City
            </label>
            <input
              placeholder="Enter City"
              className="w-full border rounded-md px-4 py-2.5 mt-1 focus:outline-none border-gray-200"
              type="text"
              {...register("city")}
            />
            {errors.city && (
              <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
            )}
          </div>
          <div className="mb-1 text-[12px] font-medium text-[#333]">
            <label className="mb-1 block text-[12px] font-medium text-[#333]">
              Street
            </label>
            <input
              placeholder="Enter Street"
              className="w-full border rounded-md px-4 py-2.5 mt-1 focus:outline-none border-gray-200"
              type="text"
              {...register("street")}
            />
            {errors.street && (
              <p className="text-red-500 text-xs mt-1">
                {errors.street.message}
              </p>
            )}
          </div>
          <div className="mb-1 text-[12px] font-medium text-[#333]">
            <label className="mb-1 block text-[12px] font-medium text-[#333]">
              Zip Code
            </label>
            <input
              placeholder="Enter Zip Code"
              className="w-full border rounded-md px-4 py-2.5 mt-1 focus:outline-none border-gray-200"
              type="text"
              {...register("zipcode")}
            />
            {errors.zipcode && (
              <p className="text-red-500 text-xs mt-1">
                {errors.zipcode.message}
              </p>
            )}
          </div>
          <div className="flex items-center justify-end mt-1 md:mt-4">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="text-gray-900 bg-gray-300 text-xs rounded-sm p-2 cursor-pointer"
              >
                Cancel
              </button>
              <Button type="submit" className="text-xs p-2 rounded-sm">
                {selectedUser ? "Update User" : "Save User"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addstockuser;
