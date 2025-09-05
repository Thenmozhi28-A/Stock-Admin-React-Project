
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { text, inputFields } from "../constant/text";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateAccountSchema } from "../validation/Schema";
import { useForm } from "react-hook-form";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Createaccount = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const Signin = () => navigate("/signin");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateAccountSchema),
  });

  const onSubmit = (data) => {
    localStorage.setItem("userEmail", data.email);
    localStorage.setItem("userPassword", data.password);
    localStorage.setItem("userFullName", data.fullName);
    localStorage.setItem("userPhoneNumber", data.phone);
    console.log(data);
    alert("Account Created Successfully!");
    navigate("/signin");
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
      <div className="bg-white px-8 lg:px-10 py-5 rounded-xl shadow-lg w-revert-layer lg:w-full max-w-md text-center flex flex-col justify-center">
        <div>
          <img
            src="https://res.cloudinary.com/dul2ze6ok/image/upload/v1750869308/Logo-removebg-preview_ndhkko.png"
            alt="LOGO"
            className="inline-block w-20"
          />
        </div>
        <div>
          {text.map((item, index) => (
            <p key={index} className={item.className}>
              {item.text}
            </p>
          ))}
        </div>
        <form
          className="flex flex-col items-start gap-4 mt-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          {inputFields.map((field, index) => (
            <div key={index} className="w-full relative">
              <Input
                label={field.label}
                type={
                  (field.name === "password" && showPassword)
                    ? "text"
                    : (field.name === "confirmPassword" && showConfirmPassword)
                      ? "text"
                      : field.name === "password" || field.name === "confirmPassword"
                        ? "password"
                        : "text"
                }
                placeholder={field.placeholder}
                {...register(field.name)}
              />
              {(field.name === "password" || field.name === "confirmPassword") && (
                <div
                  className="absolute right-3 top-9 cursor-pointer"
                  onClick={() =>
                    field.name === "password"
                      ? setShowPassword(!showPassword)
                      : setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {field.name === "password"
                    ? showPassword
                      ? <VscEye />
                      : <VscEyeClosed />
                    : showConfirmPassword
                      ? <VscEye />
                      : <VscEyeClosed />
                  }
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
            Create Account
          </Button>
        </form>
        <p className="text-[12px] text-gray-500 mt-5">
          Already have an account?{" "}
          <span
            className="text-blue-600 hover:underline font-medium cursor-pointer"
            onClick={Signin}
          >
            Sign in here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Createaccount;
