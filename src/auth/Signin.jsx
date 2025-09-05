

import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { textsign, inputsign } from "../constant/text";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { SigninSchema } from "../validation/Schema";
import { useForm } from "react-hook-form";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Signin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const Createaccount = () => navigate("/");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SigninSchema),
  });

  const onSubmit = (data) => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");
    if (data.email === storedEmail && data.password === storedPassword) {
      alert("Login Successfully!");
      navigate("/dashboard");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dul2ze6ok/image/upload/v1750867348/Loginbg_fd1zvo.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        height: "100vh",
      }}
    >
      <div className="bg-white px-5 md:px-10 py-5 rounded-xl shadow-lg w-revert-layer lg:w-full max-w-md text-center flex flex-col justify-center">
        <div>
          <img
            src="https://res.cloudinary.com/dul2ze6ok/image/upload/v1750869308/Logo-removebg-preview_ndhkko.png"
            alt="LOGO"
            className="inline-block w-20"
          />
        </div>
        <div>
          {textsign.map((item, index) => (
            <p key={index} className={item.className}>
              {item.text}
            </p>
          ))}
        </div>
        <form
          className="flex flex-col items-start gap-5 mt-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          {inputsign.map((field, index) => (
            <div key={index} className="w-full relative">
              <Input
                label={field.label}
                type={field.name === "password" ? (showPassword ? "text" : "password") : "text"}
                placeholder={field.placeholder}
                {...register(field.name)}
              />
              {field.name === "password" && (
                <div
                  className="absolute right-3 top-9 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VscEye /> : <VscEyeClosed />}
                </div>
              )}
              {errors[field.name] && (
                <p className="text-red-500 text-xs mt-1 text-left">
                  {errors[field.name].message}
                </p>
              )}
            </div>
          ))}
          <Button
            type="submit"
            className="font-semibold rounded-[8px] w-full text-[13px] py-[10px] px-0"
          >
            Sign In
          </Button>
        </form>
        <p className="text-[12px] text-gray-500 mt-5">
          Don’t have an account?{" "}
          <span
            className="text-blue-600 hover:underline font-medium cursor-pointer"
            onClick={Createaccount}
          >
            Create an Account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
