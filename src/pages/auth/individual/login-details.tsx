import { InputForm } from "@/utils/Forms";
import { Form, Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { loginDetails, loginInitialValue, loginSchema } from "./validate";
import { apiClient } from "@/components/context";
import axios from "axios";
import { useState } from "react";

export default function LoginDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.values;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{ error: boolean; message: string }>({
    error: false,
    message: "",
  });

  const handleSubmit = async (values: loginDetails) => {
    const value = { ...values, phoneNumber: `+234${values.phoneNumber}` };
    try {
      setLoading(true);
      const request = await apiClient.post("auth/register", {
        ...data,
        ...value,
        role: "individual",
      });

      const response = await request.data;
      console.log(response);
      if (!response.success) {
        setError({ error: true, message: data.error });
        return;
      }

      navigate("/register/individual/otp-verification", {
        state: {
          values: { email: data.email, phoneNumber: value.phoneNumber },
        },
      });
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const responseError = error.response?.data || error.message;
        if ("errors" in responseError) {
          const messages = responseError.errors.flatMap((err: any) => {
            const { message } = err;
            return Object.values(message);
          });
          setError({ error: true, message: messages.join(" | ") });
          return;
        }
        setError({ error: true, message: responseError });
      } else {
        console.error("Unexpected error:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className={error.error ? "block" : "hidden"}>
            <div className="flex text-[#EF4444] bg-[#FEF2F2] items-center justify-between border border-[#EF4444] p-1.5 mx-8 rounded-lg my-12">
              <p className="text-xs font-medium">{error.message}</p>
              <button
                className="bg-transparent border-0 text-2xl"
                onClick={() => setError({ error: false, message: "" })}
              >
                &times;
              </button>
            </div>
          </div>
          <div className="bg-white space-y-8 p-10">
            <div className="text-center">
              <h5 className="text-[1.3rem] font-medium">
                Register new account
              </h5>
              <p className="text-[10px] text-[#252631]">
                Sign up for an account and start trading today
              </p>
            </div>

            <div>
              <Formik
                initialValues={loginInitialValue}
                validationSchema={loginSchema}
                onSubmit={(values) => {
                  handleSubmit(values);
                }}
              >
                <Form className="space-y-4">
                  <div>
                    <InputForm
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <InputForm
                      label="Confirm Password"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="text-sm font-medium text-[#140706] mb-1 block"
                    >
                      Phone Number
                    </label>

                    <div className="flex gap-2 flex-nowrap">
                      <select className="border border-gray-300 px-2 mt-1 outline-0 w-22 text-xs text-gray-400 rounded">
                        <option value="">+234</option>
                      </select>
                      <div className="w-full">
                        <InputForm
                          name="phoneNumber"
                          type="text"
                          placeholder="Enter your phone number"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-14">
                    <button
                      disabled={loading}
                      type="submit"
                      className="text-[#D71E0E] cursor-pointer w-full p-2.5 text-sm font-semibold uppercase"
                    >
                      {loading ? "Processing..." : "Verify account"}
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <p className="text-center mb-3 text-[#252631]">
            2<span className="text-gray-400">/4</span>
          </p>
          <div className="flex flex-nowrap items-center w-full justify-center">
            <div className="bg-[#D71E0E] min-w-4 w-4 h-4 rounded-full" />
            <div className="bg-[#D71E0E] w-36 h-2 -ms-2" />
            <div className="bg-[#D71E0E] min-w-4 w-4 h-4 -ms-2 rounded-full" />
            <div className="bg-[#D71E0E] w-36 h-2 -ms-2" />
            <div className="bg-[#E8ECEF] min-w-4 w-4 h-4 -ms-2 rounded-full" />
            <div className="bg-[#E8ECEF] w-36 h-2 -ms-2" />
            <div className="bg-[#E8ECEF] min-w-4 w-4 h-4 -ms-2 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
