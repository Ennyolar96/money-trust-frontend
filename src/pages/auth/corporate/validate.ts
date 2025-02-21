import * as Yup from "yup";

export const initialValue = {
  companyName: "",
  businessType: "",
  dateOfIncorporate: "",
};

export interface basic {
  companyName: string;
  businessType: string;
  dateOfIncorporate: Date | string;
}

export const basicSchema = Yup.object({
  companyName: Yup.string().required("Company Name is required"),
  businessType: Yup.string().required("Business Type is required"),
  dateOfIncorporate: Yup.date().required("Date of Incorporation is required"),
});

export const loginInitial = {
  email: "",
  password: "",
  confirmPassword: "",
};

export interface login {
  email: string;
  password: string;
  confirmPassword: string;
}

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export interface verify {
  code: string;
}

export const verifySchema = Yup.object({
  code: Yup.string().required("OTP code is required"),
});
