import * as Yup from "yup";

export interface basicInfo {
  firstName: string;
  lastName: string;
  email: string;
}

export const basicInitialValue = {
  firstName: "",
  lastName: "",
  email: "",
};
export const basicSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export interface loginDetails {
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

export const loginInitialValue = {
  password: "",
  confirmPassword: "",
  phoneNumber: "",
};

export const loginSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  // .matches(/^\+\d{1,2}\s?\d{3,4}\s?\d{3}\s?\d{4}$/, "Invalid phone number")
});

export interface verify {
  code: string;
}

export const verifySchema = Yup.object({
  code: Yup.string().required("OTP code is required"),
});
