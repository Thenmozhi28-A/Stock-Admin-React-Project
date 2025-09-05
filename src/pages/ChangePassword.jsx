
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import Button from "../components/Button";
// import { VscEye, VscEyeClosed } from "react-icons/vsc";

// const changePasswordSchema = yup.object().shape({
//   password: yup.string().required("Current Password is required"),
//   newPassword: yup
//     .string()
//     .min(6, "Password must be at least 6 characters")
//     .required("New Password is required"),
//   confirmNewPassword: yup
//     .string()
//     .oneOf([yup.ref("newPassword"), null], "Passwords must match")
//     .required("Confirm New Password is required"),
// });

// const ChangePassword = () => {
//   const storedPassword = localStorage.getItem("userPassword");
//   const [showCurrentPassword, setShowCurrentPassword] = useState(false);
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: yupResolver(changePasswordSchema),
//      defaultValues: {
//       password: storedPassword || "",
  
//     },
//   });

//   const onSubmit = (data) => {
//     if (data.password !== storedPassword) {
//       alert("Current password is incorrect!");
//       return;
//     }
//     localStorage.setItem("userPassword", data.newPassword);
//     alert("Password updated successfully!");
//     reset();
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="p-4 flex flex-col gap-4">
//       <p className="text-sm font-medium">Change Password</p>
//       <div className="mt-3 flex flex-col gap-5 w-full">
//         <div className="flex flex-col w-full relative">
//           <label className="text-xs">Current Password</label>
//           <div className="relative">
//             <input
//               type={showCurrentPassword ? "text" : "password"}
//               placeholder="Enter your password"
//               className="p-3 mt-2 border border-gray-300 rounded-sm w-full focus:bg-white focus:border-gray-300 text-xs pr-10"
//               {...register("password")}
//             />
//             <div
//               className="absolute inset-y-0 right-0 flex items-center pr-3 mt-2 cursor-pointer"
//               onClick={() => setShowCurrentPassword(!showCurrentPassword)}
//             >
//               {showCurrentPassword ? <VscEye /> : <VscEyeClosed />}
//             </div>
//           </div>
//           {errors.password && (
//             <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
//           )}
//         </div>
//         <div className="mt-3 flex flex-col md:flex-row gap-5 w-full">
//           <div className="flex flex-col w-full relative">
//             <label className="text-xs">New Password</label>
//             <div className="relative">
//               <input
//                 type={showNewPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 className="p-3 mt-2 border border-gray-300 rounded-sm w-full focus:bg-white focus:border-gray-300 text-xs pr-10"
//                 {...register("newPassword")}
//               />
//               <div
//                 className="absolute inset-y-0 right-0 flex items-center pr-3 mt-2 cursor-pointer"
//                 onClick={() => setShowNewPassword(!showNewPassword)}
//               >
//                 {showNewPassword ? <VscEye /> : <VscEyeClosed />}
//               </div>
//             </div>
//             {errors.newPassword && (
//               <p className="text-red-500 text-xs mt-1">{errors.newPassword.message}</p>
//             )}
//           </div>
//           <div className="flex flex-col w-full relative">
//             <label className="text-xs">Confirm New Password</label>
//             <div className="relative">
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 className="p-3 mt-2 border border-gray-300 rounded-sm w-full focus:bg-white focus:border-gray-300 text-xs pr-10"
//                 {...register("confirmNewPassword")}
//               />
//               <div
//                 className="absolute inset-y-0 right-0 flex items-center pr-3 mt-2 cursor-pointer"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//               >
//                 {showConfirmPassword ? <VscEye /> : <VscEyeClosed />}
//               </div>
//             </div>
//             {errors.confirmNewPassword && (
//               <p className="text-red-500 text-xs mt-1">
//                 {errors.confirmNewPassword.message}
//               </p>
//             )}
//           </div>
//         </div>
//         <div className="flex justify-end">
//           <Button type="submit" className="px-4 py-2 rounded-sm text-sm">
//             Update Password
//           </Button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default ChangePassword;


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../components/Button";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const changePasswordSchema = yup.object().shape({
  password: yup.string().required("Current Password is required"),
  newPassword: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("New Password is required"),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm New Password is required"),
});

const ChangePassword = () => {
  const storedPassword = localStorage.getItem("userPassword");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
    defaultValues: {
      password: storedPassword || "",
    },
  });

  const onSubmit = (data) => {
    if (data.password !== storedPassword) {
      alert("Current password is incorrect!");
      return;
    }

    // Save new password
    localStorage.setItem("userPassword", data.newPassword);
    console.log("Updated Password:", data.newPassword); // 👈 log to console

    alert("Password updated successfully!");

    // Reset form but keep new password as "current password"
    reset({
      password: data.newPassword,
      newPassword: "",
      confirmNewPassword: "",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 flex flex-col gap-4">
      <p className="text-sm font-medium">Change Password</p>
      <div className="mt-3 flex flex-col gap-5 w-full">
        {/* Current Password */}
        <div className="flex flex-col w-full relative">
          <label className="text-xs">Current Password</label>
          <div className="relative">
            <input
              type={showCurrentPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="p-3 mt-2 border border-gray-300 rounded-sm w-full focus:bg-white focus:border-gray-300 text-xs pr-10"
              {...register("password")}
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center pr-3 mt-2 cursor-pointer"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            >
              {showCurrentPassword ? <VscEye /> : <VscEyeClosed />}
            </div>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* New Password & Confirm */}
        <div className="mt-3 flex flex-col md:flex-row gap-5 w-full">
          <div className="flex flex-col w-full relative">
            <label className="text-xs">New Password</label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="p-3 mt-2 border border-gray-300 rounded-sm w-full focus:bg-white focus:border-gray-300 text-xs pr-10"
                {...register("newPassword")}
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 mt-2 cursor-pointer"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <VscEye /> : <VscEyeClosed />}
              </div>
            </div>
            {errors.newPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          <div className="flex flex-col w-full relative">
            <label className="text-xs">Confirm New Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="p-3 mt-2 border border-gray-300 rounded-sm w-full focus:bg-white focus:border-gray-300 text-xs pr-10"
                {...register("confirmNewPassword")}
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 mt-2 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <VscEye /> : <VscEyeClosed />}
              </div>
            </div>
            {errors.confirmNewPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmNewPassword.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button type="submit" className="px-4 py-2 rounded-sm text-sm">
            Update Password
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ChangePassword;
