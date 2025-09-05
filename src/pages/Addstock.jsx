import React, { useEffect } from "react";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const stockSchema = yup.object().shape({

  stockName: yup.string().required("Stock Name is required"),

  symbol: yup.string().required("Symbol is required"),

  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be positive")
    .required("Price is required"),

  quantity: yup
    .number()
    .typeError("Quantity must be a number")
    .positive("Quantity must be positive")
    .integer("Quantity must be an integer")
    .required("Quantity is required"),

  status: yup.string().required("Status is required"),
});

const Addstock = ({ onClose, onSave, stock }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(stockSchema),
  });

  useEffect(() => {
    if (stock) {
      setValue("stockName", stock.stockName);
      setValue("symbol", stock.symbol);
      setValue("price", stock.price);
      setValue("quantity", stock.quantity);
      setValue("status", stock.status);
    } else {
      reset();
    }
  }, [stock, setValue, reset]);

  const onSubmit = (data) => {
    onSave({ ...data, id: stock?.id || Date.now() });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] flex items-center justify-center z-50">
      <div className="bg-white p-3 md:p-6 rounded-md w-[300px] md:w-[400px]">
        <div className="mb-1">
          <h2 className="text-[18px] font-semibold">
            {stock ? "Edit Stock" : "Add New Stock"}
          </h2>
          <p className="text-xs mb-4 font-medium text-gray-500">
            {stock
              ? "Edit the Stock Details"
              : "Add a New Stock to Your Portfolio"}
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 md:gap-3 mt-4"
        >
          <div className="mb-1 text-[12px] font-medium text-[#333]">
            <label className="mb-1 block txt-[12px] font-medium text-[#333]">
              Stock Name
            </label>
            <input
              placeholder="Enter Stock Name"
              className="w-full border rounded-md px-4 py-2.5 mt-1 focus:outline-none border-gray-200"
              type="text"
              {...register("stockName")}
            />
            {errors.stockName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.stockName.message}
              </p>
            )}
          </div>
          <div className="mb-1 text-[12px] font-medium text-[#333]">
            <label className="mb-1 block txt-[12px] font-medium text-[#333]">
              Symbol
            </label>
            <input
              placeholder="Enter Stock Symbol"
              className="w-full border rounded-md px-4 py-2.5 mt-1 focus:outline-none border-gray-200"
              type="text"
              {...register("symbol")}
            />
            {errors.symbol && (
              <p className="text-red-500 text-xs mt-1">
                {errors.symbol.message}
              </p>
            )}
          </div>
          <div className="mb-1 text-[12px] font-medium text-[#333]">
            <label className="mb-1 block txt-[12px] font-medium text-[#333]">
              Price
            </label>
            <input
              placeholder="Enter Stock Price"
              className="w-full border rounded-md px-4 py-2.5 mt-1 focus:outline-none border-gray-200"
              type="text"
              {...register("price")}
            />
            {errors.price && (
              <p className="text-red-500 text-xs mt-1">
                {errors.price.message}
              </p>
            )}
          </div>
          <div className="mb-1 text-[12px] font-medium text-[#333]">
            <label className="mb-1 block txt-[12px] font-medium text-[#333]">
              Quantity
            </label>
            <input
              placeholder="Enter Stock Quantity"
              className="w-full border rounded-md px-4 py-2.5 mt-1 focus:outline-none border-gray-200"
              type="text"
              {...register("quantity")}
            />
            {errors.quantity && (
              <p className="text-red-500 text-xs mt-1">
                {errors.quantity.message}
              </p>
            )}
          </div>
          <div className="mb-1 text-[12px] font-medium text-[#333]">
            <label className="mb-1 block txt-[12px] font-medium text-[#333]">
              Status
            </label>
            <select
              className="w-full border rounded-md px-4 py-2.5 mt-1 focus:outline-none border-gray-200"
              {...register("status")}
            >
              <option value="">Select Status</option>
              <option value="Active ">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-xs mt-1">
                {errors.status.message}
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
                {stock ? "Update Stock" : "Save Stock"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addstock;
