import * as yup from "yup";

export const CreateAccountSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is Required"),
  email: yup.string().email("Invalid email").required("Email is Required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is Required"),
 phone: yup
  .string()
  .required("Enter your phone no")
  .min(10, "Number Must 10"),

});

export const SigninSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is Required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is Required"),
});
