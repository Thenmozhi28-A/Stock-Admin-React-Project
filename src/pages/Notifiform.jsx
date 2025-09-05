import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../components/Button";

const notificationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  subtitle: yup.string().required("Subtitle is required"),
  message: yup.string().required("Message is required"),
  borderColor: yup.string().required("Type is required"),
});

const Notifiform = ({ onClose, onSave }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(notificationSchema),
    defaultValues: {
      subtitle: "(unread)",
      borderColor: "blue",
    },
  });

  const onSubmit = (data) => {
    onSave({
      id: Date.now(),
      ...data,
    });
    reset();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] flex items-center justify-center z-50">
      <div className="bg-white p-3 md:p-6 rounded-md w-[300px] md:w-[400px]">
        <div className="mb-1">
          <h2 className="text-[18px] font-semibold">Add New Notification</h2>
          <p className="text-xs mb-4 font-medium text-gray-500">
            Add a New Notification
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 md:gap-3 mt-4"
        >
          <div className="mb-1 text-[12px] font-medium text-[#333]">
            <label className="mb-1 block txt-[12px] font-medium text-[#333]">
              Title
            </label>
            <input
              placeholder="Enter Title"
              className="w-full border rounded-md px-4 py-2.5 mt-1 focus:outline-none border-gray-200 text-xs"
              type="text"
              {...register("title")}
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">
                {errors.title.message}
              </p>
            )}
          </div>
          <div className="mb-1 text-[12px] font-medium text-[#333]">
            <label className="mb-1 block txt-[12px] font-medium text-[#333]">
              Subtitle
            </label>
            <select
              className="w-full border rounded-md px-4 py-2.5 mt-1 focus:outline-none border-gray-200 text-xs"
              {...register("subtitle")}
            >
              <option value="(unread)">Unread</option>
              <option value="(read)">Read</option>
            </select>
            {errors.subtitle && (
              <p className="text-red-500 text-xs mt-1">
                {errors.subtitle.message}
              </p>
            )}
          </div>
          <div className="mb-1 text-[12px] font-medium text-[#333]">
            <label className="mb-1 block txt-[12px] font-medium text-[#333]">
              Message
            </label>
            <textarea
              placeholder="Enter Message"
              className="w-full border rounded-md px-4 py-2.5 mt-1 focus:outline-none border-gray-200 text-xs"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <div className="mb-1 text-[12px] font-medium text-[#333]">
            <label className="mb-1 block txt-[12px] font-medium text-[#333]">
              Type
            </label>
            <select
              className="w-full border rounded-md px-4 py-2.5 mt-1 focus:outline-none border-gray-200 text-xs"
              {...register("borderColor")}
            >
              <option value="blue">Info</option>
              <option value="green">Success</option>
              <option value="red">Error</option>
            </select>
            {errors.borderColor && (
              <p className="text-red-500 text-xs mt-1">
                {errors.borderColor.message}
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
              <Button type="submit" className="text-xs px-3 py-2 rounded-sm">
                Save
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Notifiform;
